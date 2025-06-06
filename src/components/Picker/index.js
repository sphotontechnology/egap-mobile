/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-use-before-define */
import React, {PureComponent} from 'react';
import {
  ColorPropType,
  Keyboard,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  // Picker,
} from 'react-native';
import _ from 'lodash';
import {Picker} from '@react-native-picker/picker';
import PropTypes from 'prop-types';

export default class PickerView extends PureComponent {
  // eslint-disable-next-line no-undef
  static propTypes = {
    onValueChange: PropTypes.func,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
        key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        color: ColorPropType,
      }),
    ).isRequired,
    value: PropTypes.any,
    placeholder: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      color: ColorPropType,
    }),
    disabled: PropTypes.bool,
    itemKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.shape({}),
    children: PropTypes.any,
    placeholderTextColor: ColorPropType, // deprecated
    useNativeAndroidPickerStyle: PropTypes.bool,

    // Custom Modal props (iOS only)
    hideDoneBar: PropTypes.bool, // deprecated
    doneText: PropTypes.string,
    onDonePress: PropTypes.func,
    onUpArrow: PropTypes.func,
    onDownArrow: PropTypes.func,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,

    // Modal props (iOS only)
    modalProps: PropTypes.shape({}),

    // TextInput props (iOS only)
    textInputProps: PropTypes.shape({}),

    // Picker props
    pickerProps: PropTypes.shape({}),

    // Custom Icon
    Icon: PropTypes.func,
    InputAccessoryView: PropTypes.func,
  };

  // eslint-disable-next-line no-undef
  static defaultProps = {
    value: undefined,
    placeholder: {
      // label: 'Select an item...',
      // value: null,
      // color: '#9EA0A4'
    },
    disabled: false,
    itemKey: null,
    style: {},
    children: null,
    placeholderTextColor: '#C7C7CD', // deprecated
    useNativeAndroidPickerStyle: true,
    hideDoneBar: false, // deprecated
    doneText: 'Done',
    onDonePress: null,
    onUpArrow: null,
    onDownArrow: null,
    onOpen: null,
    onClose: null,
    modalProps: {},
    textInputProps: {},
    pickerProps: {},
    Icon: null,
    InputAccessoryView: null,
  };

  static handlePlaceholder({placeholder}) {
    if (_.isEqual(placeholder, {})) {
      return [];
    }
    return [placeholder];
  }

  static getSelectedItem({items, key, value}) {
    let idx = items.findIndex((item) => {
      if (item.key && key) {
        return _.isEqual(item.key, key);
      }
      return _.isEqual(item.value, value);
    });
    if (idx === -1) {
      idx = 0;
    }
    return {
      selectedItem: {...items[idx], index: idx} || {idx},
      idx,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // update items if items or placeholder prop changes
    const items = PickerView.handlePlaceholder({
      placeholder: nextProps.placeholder,
    }).concat(nextProps.items);
    const itemsChanged = !_.isEqual(prevState.items, items);

    // update selectedItem if value prop is defined and differs from currently selected item
    const {selectedItem, idx} = PickerView.getSelectedItem({
      items,
      key: nextProps.itemKey,
      value: nextProps.value,
    });
    const selectedItemChanged =
      !_.isEqual(nextProps.value, undefined) &&
      !_.isEqual(prevState.selectedItem, selectedItem);

    if (itemsChanged || selectedItemChanged) {
      if (selectedItemChanged) {
        nextProps.onValueChange(selectedItem.value, idx);
      }

      return {
        ...(itemsChanged ? {items} : {}),
        ...(selectedItemChanged ? {selectedItem} : {}),
      };
    }

    return null;
  }

  constructor(props) {
    super(props);

    const items = PickerView.handlePlaceholder({
      placeholder: this.props.placeholder,
    }).concat(this.props.items);

    const {selectedItem} = PickerView.getSelectedItem({
      items,
      key: this.props.itemKey,
      value: this.props.value,
    });

    this.state = {
      items,
      selectedItem,
      showPicker: false,
      animationType: undefined,
      orientation: 'portrait',
    };

    this.onUpArrow = this.onUpArrow.bind(this);
    this.onDownArrow = this.onDownArrow.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onOrientationChange = this.onOrientationChange.bind(this);
    this.setInputRef = this.setInputRef.bind(this);
    this.togglePicker = this.togglePicker.bind(this);
    this.triggerDoneCallback = this.triggerDoneCallback.bind(this);
    this.renderInputAccessoryView = this.renderInputAccessoryView.bind(this);
  }

  onUpArrow() {
    const {onUpArrow} = this.props;

    this.togglePicker(false, onUpArrow);
  }

  onDownArrow() {
    const {onDownArrow} = this.props;

    this.togglePicker(false, onDownArrow);
  }

  onValueChange(value, index) {
    const {onValueChange, onSubmit} = this.props;

    if (typeof onValueChange === 'function') {
      onValueChange(value, index);
    }

    this.setState(
      (prevState) => ({
        selectedItem: {...prevState.items[index], index},
      }),
      () => {
        if (typeof onSubmit === 'function' && Platform.OS === 'android') {
          onSubmit(this.state.selectedItem);
        }
      },
    );
  }

  onOrientationChange({nativeEvent}) {
    this.setState({
      orientation: nativeEvent.orientation,
    });
  }

  setInputRef(ref) {
    this.inputRef = ref;
  }

  getPlaceholderStyle() {
    const {placeholder, placeholderTextColor, style} = this.props;

    if (
      !_.isEqual(placeholder, {}) &&
      this.state.selectedItem.label === placeholder.label
    ) {
      return {
        ...defaultStyles.placeholder,
        color: placeholderTextColor, // deprecated
        ...style.placeholder,
      };
    }
    return {};
  }

  triggerOpenCloseCallbacks() {
    const {onOpen, onClose} = this.props;

    if (!this.state.showPicker && onOpen) {
      onOpen();
    }

    if (this.state.showPicker && onClose) {
      onClose();
    }
  }

  triggerDoneCallback() {
    const {hideDoneBar, onDonePress} = this.props;
    if (!hideDoneBar && onDonePress) {
      onDonePress();
    }
  }

  togglePicker(animate = false, postToggleCallback) {
    const {modalProps, disabled} = this.props;

    if (disabled) {
      return;
    }

    if (!this.state.showPicker) {
      Keyboard.dismiss();
    }

    const animationType =
      modalProps && modalProps.animationType
        ? modalProps.animationType
        : 'slide';

    this.triggerOpenCloseCallbacks();

    this.setState(
      (prevState) => ({
        animationType: animate ? animationType : undefined,
        showPicker: !prevState.showPicker,
      }),
      () => {
        const {onSubmit} = this.props;
        if (typeof onSubmit === 'function' && !this.state.showPicker) {
          onSubmit(this.state.selectedItem);
        }
        if (postToggleCallback) {
          postToggleCallback();
        }
      },
    );
  }

  renderPickerItems() {
    return this.state.items.map((item) => (
      <Picker.Item
        label={item.name}
        value={item.id_owner}
        key={item.key || item.label}
        color={item.color}
      />
    ));
  }

  renderInputAccessoryView() {
    const {
      InputAccessoryView,
      doneText,
      hideDoneBar,
      onUpArrow,
      onDownArrow,
      style,
    } = this.props;

    // deprecated
    if (hideDoneBar) {
      return null;
    }

    if (InputAccessoryView) {
      return <InputAccessoryView testID="custom_input_accessory_view" />;
    }

    return (
      <View
        style={[defaultStyles.modalViewMiddle, style.modalViewMiddle]}
        testID="input_accessory_view">
        <View style={[defaultStyles.chevronContainer, style.chevronContainer]}>
          <TouchableOpacity
            activeOpacity={onUpArrow ? 0.5 : 1}
            onPress={onUpArrow ? this.onUpArrow : null}>
            <View
              style={[
                defaultStyles.chevron,
                style.chevron,
                defaultStyles.chevronUp,
                style.chevronUp,
                onUpArrow
                  ? [defaultStyles.chevronActive, style.chevronActive]
                  : {},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={onDownArrow ? 0.5 : 1}
            onPress={onDownArrow ? this.onDownArrow : null}>
            <View
              style={[
                defaultStyles.chevron,
                style.chevron,
                defaultStyles.chevronDown,
                style.chevronDown,
                onDownArrow
                  ? [defaultStyles.chevronActive, style.chevronActive]
                  : {},
              ]}
            />
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            this.togglePicker(true);
            // if (typeof onSubmit === 'function') {
            //   onSubmit(this.state.selectedItem);
            // }
          }}
          hitSlop={{top: 4, right: 4, bottom: 4, left: 4}}
          testID="done_button">
          <View testID="needed_for_touchable">
            <Text style={[defaultStyles.done, style.done]}>{doneText}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  renderIcon() {
    const {style, Icon} = this.props;

    if (!Icon) {
      return null;
    }

    return (
      <View
        testID="icon_container"
        style={[defaultStyles.iconContainer, style.iconContainer]}>
        <Icon testID="icon" />
      </View>
    );
  }

  renderTextInputOrChildren() {
    const {style, textInputProps, renderInputView} = this.props;
    const containerStyle =
      Platform.OS === 'ios'
        ? style.inputIOSContainer
        : style.inputAndroidContainer;
    if (typeof renderInputView === 'function') {
      return renderInputView();
    }

    return (
      <View pointerEvents="box-only" style={containerStyle}>
        <TextInput
          style={[
            Platform.OS === 'ios' ? style.inputIOS : style.inputAndroid,
            this.getPlaceholderStyle(),
          ]}
          value={this.state.selectedItem.label}
          ref={this.setInputRef}
          editable={false}
          {...textInputProps}
        />
        {this.renderIcon()}
      </View>
    );
  }

  renderIOS() {
    const {style, modalProps, pickerProps, touchableOpacity} = this.props;
    const Touch = touchableOpacity
      ? TouchableOpacity
      : TouchableWithoutFeedback;
    return (
      <View style={[defaultStyles.viewContainer, style.viewContainer]}>
        <Touch
          onPress={() => {
            this.togglePicker(true);
          }}
          testID="ios_touchable_wrapper">
          {this.renderTextInputOrChildren()}
        </Touch>
        <Modal
          useNativeDriver
          testID="ios_modal"
          visible={this.state.showPicker}
          transparent
          animationType={this.state.animationType}
          supportedOrientations={['portrait', 'landscape']}
          onDismiss={this.triggerDoneCallback}
          onOrientationChange={this.onOrientationChange}
          {...modalProps}>
          <TouchableOpacity
            style={[defaultStyles.modalViewTop, style.modalViewTop]}
            testID="ios_modal_top"
            onPress={() => {
              this.togglePicker(true);
            }}
          />
          {this.renderInputAccessoryView()}
          <View
            style={[
              defaultStyles.modalViewBottom,
              {height: this.state.orientation === 'portrait' ? 215 : 162},
              style.modalViewBottom,
            ]}>
            <Picker
              testID="ios_picker"
              onValueChange={this.onValueChange}
              selectedValue={this.state.selectedItem.value}
              {...pickerProps}>
              {this.renderPickerItems()}
            </Picker>
          </View>
        </Modal>
      </View>
    );
  }

  renderAndroidHeadless() {
    const {disabled, Icon, style, pickerProps} = this.props;

    return (
      <View style={style.headlessAndroidContainer}>
        {this.renderTextInputOrChildren()}
        <Picker
          style={[
            Icon ? {backgroundColor: 'transparent'} : {}, // to hide native icon
            defaultStyles.headlessAndroidPicker,
            style.headlessAndroidPicker,
            style.androidPicker,
          ]}
          testID="android_picker_headless"
          enabled={!disabled}
          onValueChange={this.onValueChange}
          selectedValue={this.state.selectedItem.value}
          {...pickerProps}>
          {this.renderPickerItems()}
        </Picker>
      </View>
    );
  }

  renderAndroidNativePickerStyle() {
    const {disabled, Icon, style, pickerProps} = this.props;

    return (
      <View style={[defaultStyles.viewContainer, style.viewContainer]}>
        <Picker
          style={[
            Icon ? {backgroundColor: 'transparent'} : {}, // to hide native icon
            style.inputAndroid,
            this.getPlaceholderStyle(),
          ]}
          testID="android_picker"
          enabled={!disabled}
          onValueChange={this.onValueChange}
          selectedValue={this.state.selectedItem.value}
          {...pickerProps}>
          {this.renderPickerItems()}
        </Picker>
        {this.renderIcon()}
      </View>
    );
  }

  render() {
    const {useNativeAndroidPickerStyle} = this.props;

    if (Platform.OS === 'ios') {
      return this.renderIOS();
    }
    if (!useNativeAndroidPickerStyle) {
      return this.renderAndroidHeadless();
    }

    return this.renderAndroidNativePickerStyle();
  }
}

export const defaultStyles = StyleSheet.create({
  viewContainer: {
    alignSelf: 'stretch',
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
  },
  modalViewTop: {
    flex: 1,
  },
  modalViewMiddle: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#EFF1F2',
    borderTopWidth: 0.5,
    borderTopColor: '#919498',
  },
  chevronContainer: {
    flexDirection: 'row',
  },
  chevron: {
    width: 15,
    height: 15,
    backgroundColor: 'transparent',
    borderColor: '#D0D4DB',
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
  },
  chevronUp: {
    marginLeft: 11,
    transform: [{translateY: 4}, {rotate: '-45deg'}],
  },
  chevronDown: {
    marginLeft: 22,
    transform: [{translateY: -5}, {rotate: '135deg'}],
  },
  chevronActive: {
    borderColor: '#007AFE',
  },
  done: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 1,
    paddingRight: 2,
  },
  modalViewBottom: {
    justifyContent: 'center',
    backgroundColor: '#D0D4DB',
  },
  placeholder: {
    color: '#C7C7CD',
  },
  headlessAndroidPicker: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    color: 'transparent',
    opacity: 0,
  },
});
