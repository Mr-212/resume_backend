import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { useAppSelector } from "../../../store/hooks";

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%'
      },
      section_right: {
        // margin: 10,
        padding: 10,
        paddingTop: 20,
        width: '65%',
        backgroundColor: '#767676'
      },
      section_left: {
        width: '35%',
        height: '100%',
        backgroundColor: '#084c41',
      },
      profile_container: {
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        // // justifyContent:'space-between',
        // marginLeft: 20,
        // marginRight: 20,
        // marginTop: '20',
        // marginBottom: '20',
        padding:20,
        // height: '100%',
        // // width:'100%',
        fontFamily: 'Helvetica-Bold',
      },
      name_text: {
        paddingTop: '10px',
        paddingBottom: '5px',
        fontSize: '18px',
        fontWeight: '600',
        color: '#E4E4E4',
      },

      contact_family: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#E4E4E4',
        fontStyle: 'italic'
      },

      field_text: {
        paddingTop: '5px',
        paddingBottom: '5px',
        fontSize: '15px',
        fontWeight: '500',
        color: 'white',
        // marginLeft: 10
      },

      field_text_sm: {
        fontSize: '12px',
        fontWeight:'500',
        color: 'white',
        // marginLeft: 10
      },
      profession_text: {
        color: '#63A3EC',
        fontSize: '15px',
        fontWeight: 500
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

      flex_row: {
        display: 'flex', 
        flexDirection:'row', 
        justifyContent:'space-between',
        width: '100%',
        alignItems:'center',
      }, 

      flex_col: {
        display: 'flex', 
        flexDirection:'column', 
        justifyContent:'flex-start',
        width: '100%'
      }

    });

const PdfTemplate = ({props}) => {

    // const profile = useAppSelector(state => state.profile.profile);
    // const skills = useAppSelector(state => state.skills.skills);
    // const education = useAppSelector(state => state.education.education);
    // const experience = useAppSelector(state => state.experience.experience);

    const profile = props.profile;
    const skills = props.skills;
    const education = props.education;
    const experience = props.experience;
    // console.log(profile);


    return(
        <Document>
            {/* {profile.length > 0  &&  */}
        <Page size="A4" style={styles.page}>
            <LefttSide profile={profile} education={education} skills={skills}></LefttSide>
            <RightSide profile={profile} experience={experience} education={education}></RightSide>
        
        </Page>
        {/* } */}
    </Document>
    )
}




export default PdfTemplate;


const RightSide = ({profile, education, experience})=>{
    console.log(profile)
    return(
         
      <View style={styles.section_right}>
        <View style={styles.flex_col} >
            <Text style={styles.name_text}>Profession Summary</Text>
            <Text style={styles.field_text_sm}> {profile.job_description}</Text>
        </View>

        <View style={ styles.flex_col }>
           <Text style={styles.name_text}>Education</Text>
           {education.map((education,k) => {
              return( 
                   <View style={styles.flex_col}>
                      <View style={styles.flex_row}>
                          <Text style={styles.field_text}>{education.qualification}</Text>
                          <Text style={styles.field_text}>{education.gpa_marks}</Text>
                      </View>
                      <View style={styles.flex_row}>
                          <Text style={styles.field_text}>{education.institution}</Text>
                          <Text style={styles.field_text}>{education.address}</Text>
                      </View>
                   </View>
              )
              
           })
          }
  
        </View> 
        <View style={ styles.flex_col}>
            <Text style={styles.name_text}>Experience</Text> 
            {experience.map((experience, k ) => {
                return(
                    <View style={ styles.flex_col }>
                        <View style={ styles.flex_row }>
                            <Text style={styles.field_text}> {experience.job_title}</Text>
                            <Text style={styles.field_text}> {experience.start_date+ ' - ' + experience.end_date}</Text>
                        </View>
                        <View style={ styles.flex_row }>
                            <Text style={styles.field_text}> {experience.company}</Text>
                            <Text style={styles.field_text}> {experience.city}</Text>
                        </View>
                        <View style={ styles.flex_col}>
                            <Text style={ {...styles.name_text, fontSize: 17}}> Description</Text>
                            <Text style={styles.field_text_sm}> {experience.description}</Text>
                        </View>
                    </View>
                 )

                 })
             }
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
          <Text style={styles.profession_text}>{profile.job_title}</Text>

        </View>
        
        <View style={ {display: 'flex', flexDirection:'column', justifyContent:'flex-start', width: '100%'} }>
          <Text style={styles.name_text}>Contact</Text>
            <View style={ styles.flex_col }>
                <Text style={ styles.field_text } >Email</Text>
                <Text style={ styles.contact_family } >{profile.email}</Text>
                <Text style={ styles.field_text } >Phone</Text>
                <Text style={ styles.contact_family}>{profile.phone}</Text>
                { profile.address && 
                    <Text style={ styles.contact_family}>{profile.address}</Text>
                }
            </View>          
        </View>
       
  
        <View style={ {display: 'flex', flexDirection:'column', justifyContent:'flex-start', width: '100%'} }>
          <Text style={styles.name_text}>Skills</Text>
  
          {Object.entries(skills).map(([key, val]) => {
                  return (
                      <View style={ styles.flex_row }>
                          <Text style={ styles.field_text } >{val['skill']}</Text>
                          <Text style={ { backgroundColor:'#41F674', height: '10%', textAlign:'left', width: val['score'], marginLeft: 20}}></Text>
                          <Text style={ { color:'white', marginLeft: 10 }}>{val['score']}</Text>
                      </View>
                  )
              })
          }
        </View>
         
      </View>
      </View>
    )
}