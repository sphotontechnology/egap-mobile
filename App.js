import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Platform, StatusBar, TouchableOpacity, UIManager, View} from 'react-native';
import CodePush from 'react-native-code-push';
import {COLOR_DARK, COLOR_PRIMARY} from "./src/constants/colors";
import configureStore from "./src/appRedux/store/configureStore";
import Scenes from "./src/scenes";
import GetStartContainer from "./src/scenes/getStart/GetStart.container";
import AppText from "./src/components/AppText";

const storeConfig = configureStore();

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(erro) {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <View
                    style={{
                        backgroundColor: 'black',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <StatusBar
                        barStyle={'dark-content'}
                        backgroundColor={'rgba(0,0,0,0.7)'}
                        translucent
                    />

                    <AppText
                        fontType={'medium'}
                        style={{
                            color: 'white',
                            fontSize: 16,
                        }}
                    >
                        Something went wrong.
                    </AppText>

                    <TouchableOpacity
                        style={{
                            borderRadius: 12,
                            backgroundColor: COLOR_PRIMARY,
                            paddingVertical: 9,
                            paddingHorizontal: 16,
                            marginTop: 16,
                        }}
                        onPress={() => {
                            CodePush.restartApp();
                        }}
                    >
                        <AppText
                            style={[
                                {
                                    color: COLOR_DARK,
                                    textAlign: 'center',
                                    fontSize: 16,
                                },
                            ]}
                        >
                            {'Restart app'}
                        </AppText>
                    </TouchableOpacity>
                </View>
            );
        }

        return this.props.children;
    }
}

const App = ({
                 progressView,
                 currentApp,
                 progress,
                 syncStatus,
                 syncMessage,
             }) => {
    const [initialRoute, setInitialRoute] = useState('HomeScreen');
    const [dataScreen, setDataScreen] = useState(null);

    return (
        <ErrorBoundary>
            <Provider store={storeConfig.store}>
                <PersistGate
                    persistor={storeConfig.persistor}
                    loading={
                        <GetStartContainer/>
                    }
                >
                    <GestureHandlerRootView
                        style={{
                            flex: 1,
                        }}
                    >
                        <Scenes/>
                    </GestureHandlerRootView>
                </PersistGate>
            </Provider>
        </ErrorBoundary>
    );
};

export default App;
