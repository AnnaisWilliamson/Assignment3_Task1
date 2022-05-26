import React, {useState} from "react";
import {SafeAreaView, StyleSheet, View, Text, Image, Picker} from 'react-native';

const [picker1selectedvalue, setPicker1SelectedValue] = useState("val-Potato");

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Welcome heading  (Annie) */}
      <View style={styles.row1}>
      <Text style={styles.heading}> Welcome to VFUS </Text>
      </View>

      {/* 2. Image of your choice (Nishesh) */}

      {/* 3. Veggies dropdown (Annie) */}
      <View style={styles.row3}>
      <Picker style={styles.picker1}
      selectedValue={picker1selectedvalue}
      onValueChange={(itemValue, itemIndex) => setPicker1SelectedValue(itemValue)}>
        <Picker.Item	label="Veggies" />
      	<Picker.Item	label="Potato - $5"	value="val-Potato - $5"	/>
        <Picker.Item	label="Capsicum - $8"	value="val-Capsicum - $8"	/>
        <Picker.Item	label="Brocolli - $8"	value="val-Brocolli - $8"	/>
        </Picker>
      </View>

      {/* 4. Fruits dropdown (Nishesh) */}

      {/* 5. Quantities dropdowns (Daniel) */}

      {/* 6. Calculate button (Akif) */}

      {/* 7. Developers credit  (Daniel) */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffcc'
  },
  heading: {
    fontSize:20,
    textAlign: 'center',
    marginTop: 50
  },
    picker1: {
    flex:2
  },
   row3: {
    marginTop: 20,
    flexDirection: 'row',
  },
});
