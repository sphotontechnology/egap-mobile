import React, { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import CodePush from "react-native-code-push";
import AppText from "./src/components/AppText";
import App from "./App";

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentApp: "GetStartView",
      restartAllowed: true,
      syncMessage: "",
      progress: undefined,
      syncStatus: -1,
    };
  }

  // codePushStatusDidChange(syncStatus) {
  //   switch (syncStatus) {
  //     case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
  //       console.log("CodePush.SyncStatus.CHECKING_FOR_UPDATE");
  //       this.setState({ syncMessage: "Checking for update.", syncStatus: syncStatus });
  //       break;
  //     case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
  //       console.log("CodePush.SyncStatus.DOWNLOADING_PACKAGE");
  //       this.setState({ syncMessage: "Downloading package.", syncStatus: syncStatus });
  //       break;
  //     case CodePush.SyncStatus.AWAITING_USER_ACTION:
  //       console.log("CodePush.SyncStatus.AWAITING_USER_ACTION");
  //       this.setState({ syncMessage: "Awaiting user action.", syncStatus: syncStatus });
  //       break;
  //     case CodePush.SyncStatus.INSTALLING_UPDATE:
  //       console.log("CodePush.SyncStatus.INSTALLING_UPDATE");
  //       this.setState({ syncMessage: "Installing update.", syncStatus: syncStatus });
  //       break;
  //     case CodePush.SyncStatus.UP_TO_DATE:
  //       console.log("CodePush.SyncStatus.UP_TO_DATE");
  //       this.setState({ syncMessage: "App up to date.", progress: false, syncStatus: syncStatus });
  //       break;
  //     case CodePush.SyncStatus.UPDATE_IGNORED:
  //       console.log("CodePush.SyncStatus.UPDATE_IGNORED");
  //       this.setState({ syncMessage: "Update cancelled by user.", progress: false, syncStatus: syncStatus });
  //       break;
  //     case CodePush.SyncStatus.UPDATE_INSTALLED:
  //       console.log("CodePush.SyncStatus.UPDATE_INSTALLED");
  //       this.setState({
  //         syncMessage: "Update installed and will be applied on restart.",
  //         progress: false,
  //         syncStatus: syncStatus,
  //       });
  //       break;
  //     case CodePush.SyncStatus.UNKNOWN_ERROR:
  //       console.log("CodePush.SyncStatus.UNKNOWN_ERROR");
  //       this.setState({ syncMessage: "An unknown error occurred.", progress: false, syncStatus: syncStatus });
  //       break;
  //   }
  // }
  //
  // codePushDownloadDidProgress(progress) {
  //   this.setState({ progress });
  // }
  //
  // toggleAllowRestart() {
  //   this.state.restartAllowed
  //       ? CodePush.disallowRestart()
  //       : CodePush.allowRestart();
  //
  //   this.setState({ restartAllowed: !this.state.restartAllowed });
  // }
  //
  // getUpdateMetadata() {
  //   CodePush.getUpdateMetadata(CodePush.UpdateState.RUNNING)
  //       .then((metadata) => {
  //         this.setState({ syncMessage: metadata ? JSON.stringify(metadata) : "Running binary version", progress: false });
  //       }, (error) => {
  //         this.setState({ syncMessage: "Error: " + error, progress: false });
  //       });
  // }
  //
  // /** Update is downloaded silently, and applied on restart (recommended) */
  // sync() {
  //   CodePush.sync(
  //       {},
  //       this.codePushStatusDidChange.bind(this),
  //       this.codePushDownloadDidProgress.bind(this),
  //   );
  // }
  //
  // /** Update pops a confirmation dialog, and then immediately reboots the app */
  // syncImmediate() {
  //   CodePush.sync(
  //       { installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: { appendReleaseDescription: true } },
  //       this.codePushStatusDidChange.bind(this),
  //       this.codePushDownloadDidProgress.bind(this),
  //   );
  // }

  render() {
    let progressView;
    if (this.state.progress) {
      progressView = (
          <AppText style={styles.messages}>{((this?.state?.progress?.receivedBytes / this?.state?.progress?.totalBytes) * 100).toFixed(0)}%</AppText>
      );
    }

    return (
        <View style={{ overflow: "scroll", flex: 1 }}>
          <App
              progressView={progressView}
              progress={this?.state?.progress}
              currentApp={this?.state?.currentApp}
              syncMessage={this.state.syncMessage}
              syncStatus={this?.state?.syncStatus}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 50,
  },
  image: {
    margin: 30,
    width: Dimensions.get("window").width - 100,
    height: (365 * (Dimensions.get("window").width - 100)) / 651,
  },
  messages: {
    alignSelf: "center",
    color: "rgba(255, 252, 252, 1)",
    fontSize: 16,
  },
  restartToggleButton: {
    color: "blue",
    fontSize: 17,
  },
  syncButton: {
    color: "green",
    fontSize: 17,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 20,
  },
});

let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  installMode: CodePush.InstallMode.ON_NEXT_RESTART,
};

export default CodePush(codePushOptions)(MyApp);
