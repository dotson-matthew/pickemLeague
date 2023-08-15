import * as React from "react";
import Select from "react-select";
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

import { useContext, createContext } from "react";
import { SelectList } from "react-native-dropdown-select-list";

import StyleSheet69 from "../components/StyleReference";
import ConfirmationScreen from "./ConfirmationScreen";
const styles = StyleSheet69();

function SubmissionScreen({ navigation, route }) {
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
    "",
  ]);
  const [triple, setTriple] = React.useState(-1);
  const [locked, setLocked] = React.useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const SubmissionButton = ({ navigation, selNum, title2 }) => {
    var title = "";
    var primeTime = false;
    var triplePlay = false;
    var submitButton = false;
    var style = styles.buttonLittle;
    switch (selNum) {
      case 0: {
        if (title2 == ""){
          title = "PYO #1";
        }
        else {
          title = title2
        }
        
        break;
      }
      case 1: {
        if (title2 == ""){
          title = "PYO #2";
        }
        else {
          title = title2
        }
        break;
      }
      case 2: {
        if (title2 == ""){
          title = "PYO #3";
        }
        else {
          title = title2
        }
        break;
      }
      case 3: {
        if (title2 == ""){
          title = "PYO #4";
        }
        else {
          title = title2
        }

        break;
      }
      case 4: {
        if (title2 == ""){
          title = "PYO #5";
        }
        else {
          title = title2
        }
        break;
      }
      case 5: {
        
        if (title2 == ""){
          title = "PYO #6";
        }
        else {
          title = title2
        }
        break;
      }
      case 6: {
        primeTime = true;
        if (title2 == ""){
          title = "SNF";
        }
        else {
          title = title2
        }
        break;
      }
      case 7: {
        primeTime = true;
        if (title2 == ""){
          title = "MNF";
        }
        else {
          title = title2
        }
        break;
      }
      case 8: {
        triplePlay = true;
        if (title2 == ""){
          title = "Triple Play";
        }
        else {
          title = title2
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
    const data = [
      { key: "1", value: "Mobiles", disabled: true },
      { key: "2", value: "Appliances" },
      { key: "3", value: "Cameras" },
      { key: "4", value: "Computers", disabled: true },
      { key: "5", value: "Vegetables" },
      { key: "6", value: "Diary Products" },
      { key: "7", value: "Drinks" },
    ];
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
                    <TouchableOpacity onPress={() => {
                      // here is where we connect the backend connection


                      setModalVisible(!modalVisible)
                    }}>
                      <View style={styles.buttonRectangle}>
                        <Text style={styles.buttonText}>Submit</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                      setModalVisible(!modalVisible)
                    }}>
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
          <View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible)
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
                  <Text style={styles.boxText}>PYO#{selNum + 1}</Text>
                </View>
                <View style={styles.spacer} />
                <View style={styles.spacer} />

                <SelectList
                  setSelected={(val) => setSelected(val)}
                  data={selectionSet}
                  save="value"
                  boxStyles={styles.categoryBox2}
                  defaultOption={selected}
                  onSelect = {()=>{
                    let i=0;
                    var a = []
                    for (x of selectionSet){
                      if (i== selNum){
                       a.push(selected)
                      }
                      else{
                        a.push(x)
                      }
                      i++;
                    }
                    console.log(a);
                    setSelectionSet(a);
                  }
                }
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
                  defaultOption={selected}
                  onSelect = {()=>{
                    let i=0;
                    var a = []
                    for (x of selectionSet){
                      if (i== selNum){
                       a.push(selected)
                      }
                      else{
                        a.push(x)
                      }
                      i++;
                    }
                    console.log(a);
                    setSelectionSet(a);
                  }
                }
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
          title2 = {selectionSet[0]}
        />

        <SubmissionButton navigation={navigation} selNum={1} title2 = {selectionSet[1]}/>
        <SubmissionButton navigation={navigation} selNum={2} title2 = {selectionSet[2]}/>
      </View>
      <View style={styles.row}>
        <SubmissionButton navigation={navigation} selNum={3} title2 = {selectionSet[3]}/>

        <SubmissionButton navigation={navigation} selNum={4} title2 = {selectionSet[4]}/>

        <SubmissionButton navigation={navigation} selNum={5} title2 = {selectionSet[5]}/>
      </View>

      <View style={styles.spacer} />

      <View style={styles.row}>
        <View style={styles.categoryBox}>
          <Text style={styles.boxText}>Prime</Text>
          <Text style={styles.boxText}>Time:</Text>
        </View>

        <SubmissionButton navigation={navigation} selNum={6} title2 = {selectionSet[6]}/>

        <SubmissionButton navigation={navigation} selNum={7} title2 = {selectionSet[7]}/>
      </View>

      <View style={styles.spacer} />

      <View style={styles.row}>
        <View style={styles.categoryBox}>
          <Text style={styles.boxText}>Triple</Text>
          <Text style={styles.boxText}>Play:</Text>
        </View>

        <SubmissionButton navigation={navigation} selNum={8} title2 = {selectionSet[8]}/>
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
}

export default SubmissionScreen;
