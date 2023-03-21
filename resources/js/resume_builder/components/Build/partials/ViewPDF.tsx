import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Html } from 'react-pdf-html';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export const ViewPDF = ({ element }: any) => (
  <Document>
    <Page size="A4">
    {/* <View style={styles.section}>
        <Text>Section #1</Text>
      </View> */}
      {element}
      {/* <Html>
         {element}
      </Html> */}
       
     

    </Page>
  </Document>
);