import * as React from "react";

import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
} from "react-native";

import { SelectList } from "react-native-dropdown-select-list";

import StyleSheet69 from "../components/StyleReference";

import axios from "axios";
const styles = StyleSheet69();


const SubmissionScreen = ({ navigation, route }) => {
  const username = route.params.username
  console.log(username)
  const [selectionSet, setSelectionSet] = React.useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  function adjustSelectionSet(normal, selNum, selected) {
    switch (normal) {
      case true: {
        var t;
        var a = [];
        for (var q = 0; q < selectionSet.length; q++) {
          if (q == selNum) {
            if (selectionSet[q] == selectionSet[8] && selectionSet[8] != "") {
              t = true;
            }
            a.push(selected);
          } else {
            a.push(selectionSet[q]);
          }
        }
        if (t == true) {
          a[8] = "";
        }
        setSelectionSet(a);
        break;
      }
      case false: {
        var a = [];
        for (var q = 0; q < selectionSet.length; q++) {
          if (q == selNum) {
            a.push(selected);
          } else {
            a.push(selectionSet[q]);
          }
        }
        setSelectionSet(a);
        break;
      }
    }
  }
  function hasDeadlinePassed(){
    const now = new Date();
    const deadline = new Date();
    deadline.setUTCDate(1);
    deadline.setUTCHours(1);
    deadline.setUTCMinutes(24);
    deadline.setUTCSeconds(59);

    const currentTime = now.toISOString();
    const deadlineTime = deadline.toISOString();
    console.log(currentTime)
    console.log(deadlineTime)
    var earliestGame;
    for (var i=0; i<gameData.length;i++){
      if (i==0){
        earliestGame = gameData[i].deadline
        continue
      }
      if (earliestGame > gameData[i].deadline){
        earliestGame = gameData[i].deadline
      }
      console.log("Earliest Game" + earliestGame)
    }
    for (var i=0; i<gameData.length;i++){
      if (currentTime>deadlineTime){
        console.log("Deadline Passed");
        return (
          <View>
            <Text>A game has passed it's deadline. 
              Exit this page and open the submission page again to start over.</Text>
            
          </View>
        );
      }
    }
  }
  
  const [locked, setLocked] = React.useState([]);
  const [gameData, setGameData] = React.useState([]);
  const [gamesList, setGamesList] = React.useState([]);
  const [gamesList2, setGamesList2] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState([]);
  

  
  React.useEffect(() => {
    // useEffect hook
    setTimeout(() => {
      // simulate a delay
      axios
        .get("https://nflpickemapi.azurewebsites.net/GetUIGameModels")
        .then((response) => {
          console.log("Made API call");
          setGameData(response.data);
          setIsLoading(false); //set loading state
        });
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Text>Loading the data</Text>
        {console.log("loading state")}
      </View>
    );
  }
  if (gamesList.length<1){
    updateGamesList(gameData)
  }
  if (gamesList2.length<1){
      updateGamesList2(gamesList)
  }
  console.log(gameData);
  const deadPage = hasDeadlinePassed();
  if (deadPage !=null){
    return deadPage
  }
 
  console.log(gameData);
  console.log("\n.\n.\n.");

  console.log(gamesList);
  console.log("\n.\n.\n.");

  console.log(gamesList2);
  console.log("\n.\n.\n.");

  const SubmissionButton = ({
    navigation,
    selNum,
    title2,
    games,
    gamesAlreadySelected,
  }) => {
    var title = "";
    var primeTime = false;
    var triplePlay = false;
    var submitButton = false;
    var style = styles.buttonLittle;
    switch (selNum) {
      case 0: {
        if (title2 == "") {
          title = "PYO #1";
        } else {
          title = title2;
        }

        break;
      }
      case 1: {
        if (title2 == "") {
          title = "PYO #2";
        } else {
          title = title2;
        }
        break;
      }
      case 2: {
        if (title2 == "") {
          title = "PYO #3";
        } else {
          title = title2;
        }
        break;
      }
      case 3: {
        if (title2 == "") {
          title = "PYO #4";
        } else {
          title = title2;
        }

        break;
      }
      case 4: {
        if (title2 == "") {
          title = "PYO #5";
        } else {
          title = title2;
        }
        break;
      }
      case 5: {
        if (title2 == "") {
          title = "PYO #6";
        } else {
          title = title2;
        }
        break;
      }
      case 6: {
        primeTime = true;
        if (title2 == "") {
          title = "SNF";
        } else {
          title = title2;
        }
        break;
      }
      case 7: {
        primeTime = true;
        if (title2 == "") {
          title = "MNF";
        } else {
          title = title2;
        }
        break;
      }
      case 8: {
        triplePlay = true;
        if (title2 == "") {
          title = "Triple Play";
        } else {
          title = title2;
        }
        break;
      }
      case 9: {
        submitButton = true;
        title = "SUBMIT PICKS";
        style = styles.buttonRectangle;
      }
    }
    const [modalVisible, setModalVisible] = React.useState(false);
    const [selected, setSelected] = React.useState("");

    const data = gamesList2;
    // Object structure of game received from API
    // game {
    //   gameId (string),
    //   Week (int),
    //   Home (string),
    //   Away (string),
    //   Kickoff (string),
    //   Deadline (string),
    // }
    //

    if (submitButton) {
      return (
        <View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <TouchableOpacity
                      onPress={() => {
                        // here is where we connect the backend connection

                        setModalVisible(!modalVisible);
                      }}
                    >
                      <View style={styles.buttonRectangle}>
                        <Text style={styles.buttonText}>Submit</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <View style={styles.buttonRectangleCancel}>
                        <Text style={styles.buttonText}>Cancel</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <View style={style}>
                <Text style={styles.buttonText}>{title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (triplePlay) {
      return (
        <View>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.categoryBox2}>
                    <Text style={styles.boxText}>Triple</Text>
                  </View>
                  <View style={styles.spacer} />
                  <View style={styles.spacer} />

                  <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={selectionSet}
                    save="value"
                    boxStyles={styles.categoryBox2}
                    defaultOption={selected}
                    onSelect={() => {
                      adjustSelectionSet(false, selNum, selected);
                    }}
                  />
                  <View style={styles.spacer} />
                  <View style={styles.spacer} />
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <View style={styles.buttonModal}>
                      <Text style={styles.buttonText}>Close</Text>
                    </View>
                  </TouchableOpacity>
                  <Text>{selected}</Text>
                </View>
              </View>
            </Modal>
            <View style={style}>
              <Text style={styles.buttonText}>{title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.categoryBox2}>
                  <Text style={styles.boxText}>PYO#{selNum + 1}</Text>
                </View>
                <View style={styles.spacer} />
                <View style={styles.spacer} />

                <SelectList
                  setSelected={(val) => setSelected(val)}
                  data={data}
                  save="value"
                  boxStyles={styles.categoryBox2}
                  defaultOption={selectionSet[selNum]}
                  onSelect={() => {
                    adjustSelectionSet(true, selNum, selected);
                  }}
                />
                <View style={styles.spacer} />
                <View style={styles.spacer} />
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.buttonModal}>
                    <Text style={styles.buttonText}>Close</Text>
                  </View>
                </TouchableOpacity>
                <Text>{selected}</Text>
              </View>
            </View>
          </Modal>
          <View>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <View style={style}>
                <Text style={styles.buttonText}>{title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };
  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <View style={styles.categoryBox}>
          <Text style={styles.boxText}>Pick Set:</Text>
        </View>
        <View style={styles.categoryBoxBigger}>
          <Text style={styles.boxText2}>{JSON.stringify(selectionSet)}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.categoryBoxRectangle}>
          <Text style={styles.boxText}>PYO 1-6:</Text>
        </View>
      </View>
      <View style={styles.row}>
        <SubmissionButton
          navigation={navigation}
          selNum={0}
          title2={selectionSet[0]}
        />

        <SubmissionButton
          navigation={navigation}
          selNum={1}
          title2={selectionSet[1]}
        />
        <SubmissionButton
          navigation={navigation}
          selNum={2}
          title2={selectionSet[2]}
        />
      </View>
      <View style={styles.row}>
        <SubmissionButton
          navigation={navigation}
          selNum={3}
          title2={selectionSet[3]}
        />

        <SubmissionButton
          navigation={navigation}
          selNum={4}
          title2={selectionSet[4]}
        />

        <SubmissionButton
          navigation={navigation}
          selNum={5}
          title2={selectionSet[5]}
        />
      </View>

      <View style={styles.spacer} />

      <View style={styles.row}>
        <View style={styles.categoryBox}>
          <Text style={styles.boxText}>Prime</Text>
          <Text style={styles.boxText}>Time:</Text>
        </View>

        <SubmissionButton
          navigation={navigation}
          selNum={6}
          title2={selectionSet[6]}
        />

        <SubmissionButton
          navigation={navigation}
          selNum={7}
          title2={selectionSet[7]}
        />
      </View>

      <View style={styles.spacer} />

      <View style={styles.row}>
        <View style={styles.categoryBox}>
          <Text style={styles.boxText}>Triple</Text>
          <Text style={styles.boxText}>Play:</Text>
        </View>

        <SubmissionButton
          navigation={navigation}
          selNum={8}
          title2={selectionSet[8]}
        />
      </View>
      <View style={styles.spacer} />

      <View style={styles.row}>
        <SubmissionButton navigation={navigation} selNum={9} />
      </View>

      <View>
        <Text>{JSON.stringify(selectionSet)}</Text>
      </View>
    </View>
  );
  function updateGamesList(gameData) {
    var currentTime;
    if (gameData.length > 0) {
      currentTime = gameData[0].currentTime;
    } else return;
    var gamesListTemp = [];
    var dotw;
    var k;
    var d;
    var aString;
    var hString;
    var hSym;
    var aSym;
    for (var i = 0; i < gameData.length; i++) {
      //var date = new Date(JSON.stringify(gameTemp[i].data.kickoff));
      //dotw = date.getDay(k);
      //console.log(dotw)
      //fix later

      k = gameData[i].kickoff;
      d = gameData[i].deadline;
      if (gameData[i].homeSpread !== 0) {
        if (gameData[i].homeSpread > 0) {
          hSym = "+";
          aSym = "";
        } else {
          hSym = "";
          aSym = "+";
        }
      } else aSym = hSym = "+";

      hString =
        gameData[i].home +
        " " +
        hSym +
        gameData[i].homeSpread +
        " vs " +
        gameData[i].away;
      aString =
        gameData[i].away +
        " " +
        aSym +
        gameData[i].awaySpread +
        " @ " +
        gameData[i].home;
      gamesListTemp.push({
        id: gameData[i].gameId,
        data: {
          team: gameData[i].away,
          oppo: gameData[i].home,
          spread: gameData[i].awaySpread,
          string: aString,
        },
      });
      gamesListTemp.push({
        id: gameData[i].gameId,
        data: {
          team: gameData[i].home,
          oppo: gameData[i].away,
          spread: gameData[i].homeSpread,
          string: hString,
        },
      });
    }

    setGamesList(gamesListTemp);
  }
  function updateGamesList2(gamesList) {
    var currentTime;
    if (gamesList.length < 1) {
      return;
    }
    var gamesListTemp = [];
    for (var i = 0; i < gamesList.length; i++) {
      gamesListTemp.push({
        key: gamesList[i].id,
        value: gamesList[i].data.string,
      });
    }

    setGamesList2(gamesListTemp);
  }
};

export default SubmissionScreen;
