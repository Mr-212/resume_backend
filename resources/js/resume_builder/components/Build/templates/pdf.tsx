import React from "react";


import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { useAppSelector } from "../../../store/hooks";

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%'
      },
      section_right: {
        margin: 10,
        padding: 10,
        paddingTop: 20,
        width: '65%',
      },
      section_left: {
        width: '35%',
        height: '100%',
        backgroundColor: '#084c41',
      },
      profile_container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 20,
        marginRight: 20,

        marginTop: '20',
        marginBottom: '20px',
        height: '150',
        fontFamily: 'Helvetica-Bold',
      },
      name_text: {
        paddingTop: '10px',
        paddingBottom: '5px',
        fontSize: '14px',
        fontWeight: '600',
        color: 'white',
      },
      field_text: {
        fontSize: '17px',
        fontWeight: '600',
        color: 'white',
        // marginLeft: 10
      },
      profession_text: {
        color: '#63A3EC',
        fontSize: '15px',
        fontWeight:500
      },
      profile_img: {
        width: '60px',
        height: '60px',
        borderRadius: '90',
      },
      profile_line: {
        marginTop: '10px',
        width: '10%',
        height: '1px',
        backgroundColor: '#FFF',
        textAlign: 'center',
      },
    });

const PdfTemplate = () => {

    const profile = useAppSelector(state => state.profile.profile);
    const skills = useAppSelector(state => state.skills.skills);
    const education = useAppSelector(state => state.education.education);
    const experience = useAppSelector(state => state.experience.experience);


    return(
    <Document>
    <Page size="A4" style={styles.page}>
     
      <LefttSide profile={profile} education={education} skills={skills}></LefttSide>
      <RightSide profile={profile}/>
     
    </Page>
  </Document>
    )
}


export default PdfTemplate;


const RightSide = ({profile})=>{

    return(
         
      <View style={styles.section_right}>
        <View style={ {display: 'flex', flexDirection:'column', justifyContent:'flex-start',width: '100%'} }>
            <Text style={styles.name_text}>Profession Summary</Text>
            
            <Text style={styles.field_text}> {profile.job_description}</Text>
        </View>
        <View style={ {display: 'flex', flexDirection:'column', justifyContent:'flex-start',width: '100%'} }>
            <Text style={styles.name_text}>Experience</Text> 
            <Text style={styles.field_text}> {profile.job_description}</Text>
        </View>
        
      </View>
    )
}
const LefttSide = ({profile, education, skills})=>{

    return(
         
        <View style={styles.section_left}>
        <View style={styles.profile_container}>
           {/* <Image style={styles.profile_img} src={profile.profileImageURL} /> */}
  
        <View
          style={{
            justifyContent: 'center',
          }}
        >
          <Text style={styles.name_text}>{profile.first_name}</Text>
        </View>
        <Text style={styles.profession_text}>{profile.job_title}</Text>
        <View style={styles.profile_line} />
        
        <View style={ {display: 'flex', flexDirection:'column', justifyContent:'flex-start',width: '100%'} }>
           <Text style={styles.name_text}>Education</Text>
           {education.map((education,k) => {
              return( 
                   <View style={{display: 'flex', flexDirection:'column', alignItems:'center', width: '100%', borderBottom:'white',borderBottomWidth:'10',borderBottomColor:'white'}}>
                      <View style={{display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',width: '100%'}}>
                          <Text style={styles.field_text}>{education.qualification}</Text>
                          <Text style={styles.field_text}>{education.gpa_marks}</Text>
                      </View>
                      <View style={{display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width: '100%'}}>
                          <Text style={styles.field_text}>{education.institution}</Text>
                          <Text style={styles.field_text}>{education.address}</Text>
                      </View>
                   </View>
              )
              
           })
          }
  
        </View>
  
        <View style={styles.profile_line} />
  
        <View style={ {display: 'flex', flexDirection:'column', justifyContent:'flex-start', width: '100%'} }>
          <Text style={styles.name_text}>Skills</Text>
  
          {Object.entries(skills).map(([key, val]) => {
                  return (
                      <View style={ {display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'center', width: '100%'} }>
                          <Text style={ { fontWeight:100, color: 'white'}} >{val['skill']}</Text>
                          <Text style={ { backgroundColor:'#41F674', height: '10%',textAlign:'left', width: val['score'], marginLeft: 20}}></Text>
                          <Text style={ {color:'white', marginLeft: 10}}>{val['score']}</Text>
                      </View>
                  )
              })
          }
      </View>
        <View style={styles.profile_line} /></View>
         
      </View>
    )
}