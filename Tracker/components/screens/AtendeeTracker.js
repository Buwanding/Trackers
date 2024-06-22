import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const data = [
  {
    name: "Present",
    population: 18,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Absent",
    population: 36,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Late",
    population: 6,
    color: "#FFFF00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const attendees = [
  {
    name: "Attendee 1",
    date: "10.03.26",
    time: "8:00 AM",
    table: "A",
    status: "green",
  },
  {
    name: "Attendee 2",
    date: "10.04.26",
    time: "9:00 AM",
    table: "B",
    status: "red",
  },
  {
    name: "Attendee 3",
    date: "10.05.26",
    time: "10:00 AM",
    table: "C",
    status: "yellow",
  },
  {
    name: "Attendee 4",
    date: "10.06.26",
    time: "11:00 AM",
    table: "D",
    status: "green",
  },
];

export default function AtendeeTracker() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{ uri: "https://via.placeholder.com/150" }} // replace with your image
        />
        <View style={styles.headerText}>
          <Text style={styles.title}>Mr. & Mrs. Malik Wedding 2026</Text>
          <Text style={styles.details}>Luxe Hotel Lapasan, Cagayan De oro</Text>
          <Text style={styles.details}>August 23, 2026</Text>
          <Text style={styles.details}>9:00 AM - 3:00 PM</Text>
          <Text style={styles.details}>Total Visitor: 60</Text>
        </View>

{/* SCANN QR PART */}
        <TouchableOpacity style={styles.scanButton}>
          <Text style={styles.scanButtonText}>📷 Scan me!</Text>
        </TouchableOpacity>
      </View>

{/* PIE CHART */}
      <View style={styles.chartContainer}>
        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          center={[10, 10]}
          absolute
        />

{/* LEGEND FOR THE MEANING OF RED, GREEN, AND YELLOW */}
        <View style={styles.legend}>
          <Text style={[styles.legendText, { color: "green" }]}>Present</Text>
          <Text style={[styles.legendText, { color: "red" }]}>Absent</Text>
          <Text style={[styles.legendText, { color: "yellow" }]}>Late</Text>
        </View>
      </View>

{/* FILTER BUTTONS */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, styles.filterButtonActive]}>
          <Text style={styles.filterButtonText}>ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>PRESENT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>ABSENT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>LATE</Text>
        </TouchableOpacity>
      </View>

{/* TABLE HEADER */}
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>NAME</Text>
        <Text style={styles.tableHeaderText}>DATE & TIME</Text>
        <Text style={styles.tableHeaderText}>TABLE</Text>
        <Text style={styles.tableHeaderText}>STATUS</Text>
      </View>
      {attendees.map((attendee, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.tableRowText}>{attendee.name}</Text>
          <Text
            style={styles.tableRowText}
          >{`${attendee.date} ${attendee.time}`}</Text>
          <Text style={styles.tableRowText}>{`TABLE ${attendee.table}`}</Text>
          <View
            style={[
              styles.statusIndicator,
              { backgroundColor: attendee.status },
            ]}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  header: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#444",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  headerText: {
    marginLeft: 20,
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    color: "#ccc",
    marginTop: 5,
  },
  scanButton: {
    backgroundColor: "#ff0",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  scanButtonText: {
    fontSize: 16,
  },
  chartContainer: {
    padding: 20,
    backgroundColor: "#555",
    alignItems: "center",
  },
  legend: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  legendText: {
    color: "#fff",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#666",
  },
  filterButton: {
    padding: 10,
    backgroundColor: "#777",
    borderRadius: 5,
  },
  filterButtonActive: {
    backgroundColor: "#ff0",
  },
  filterButtonText: {
    color: "#000",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#888",
  },
  tableHeaderText: {
    color: "#fff",
    flex: 1,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#999",
    borderBottomWidth: 1,
    borderBottomColor: "#777",
  },
  tableRowText: {
    color: "#fff",
    flex: 1,
    textAlign: "center",
  },
  statusIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
