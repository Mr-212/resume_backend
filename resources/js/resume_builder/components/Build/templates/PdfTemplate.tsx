import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';
import { useAppSelector } from "../../../store/hooks";
import { color } from "html2canvas/dist/types/css/types/color";
import { display } from "html2canvas/dist/types/css/property-descriptors/display";
import { WithPDFPreview } from "../WithPDFPreview";
import { ResumeStore } from "../partials/useResumeStore";

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%'
        // '[&::-webkit-scrollbar]': 'hidden' ,
        // overflow: 'hidden'
      },
      section_right: {
        // margin: 10,
        padding: 15,
        paddingTop: 20,
        width: '65%',
        backgroundColor: '#F1F3F7',
        fontFamily: 'Helvetica-Bold',
      },
      section_left: {
        width: '35%',
        height: '100%',
        backgroundColor: 'black',
      },
      profile_container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'flex-start',
        // marginLeft: 20,
        // marginRight: 20,
        // marginTop: '20',
        // marginBottom: '20',
        padding:20,
        // margin: 20,
        // height: '100%',
        // // width:'100%',
        fontFamily: 'Helvetica-Bold',
      },
      name_text: {
        paddingTop: '10px',
        paddingBottom: '5px',
        fontSize: '14px',
        fontWeight: '400',
        color: '#E4E4E4',
      },

      contact_family: {
        fontSize: '14px',
        fontWeight: '300',
        color: '#63A3EC',
        fontStyle: 'italic'
      },

      field_text: {
        paddingTop: '5px',
        paddingBottom: '5px',
        fontSize: '13px',
        fontWeight: '300',
        color: '#E4E4E4',
        // marginLeft: 10
      },

      field_text_sm: {
        fontSize: '12px',
        fontWeight:'500',
        color: '#63A3EC',
        paddingTop: '4px',
        // marginLeft: 10
      },
      profession_text: {
        color: '#63A3EC',
        fontSize: '11px',
        fontWeight: '300',
        paddingTop:'5px',
      },
      profile_img: {
        width: '80px',
        height: '80px',
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
        marginTop: '5px',

      }, 

      flex_col: {
        display: 'flex', 
        flexDirection:'column', 
        justifyContent:'flex-start',
        width: '100%',
        marginTop: '5px',
        
      },

      right_section_headings: {
        color: '#475569',
        paddingTop: '5px',
        paddingBottom: '5px',
        fontSize: '14px',
        fontWeight: '600',

      },

      border_right_section :{
        borderBottom: '1px', 
        borderBottomColor:'#B4AEAD'
      },

      section_right_font_colors :{
        fontSize: '13px',
        fontWeight:'500',
        color: 'black',
        paddingTop: '4px',
      },
      
      section_right_font_colors_sm :{
        fontSize: '11px',
        fontWeight:'100',
        color: 'black',
        paddingTop: '4px',
      }

    });


const PdfTemplate = (props) => {

    // const profile = useAppSelector(state => state.profile.profile);
    // const skills = useAppSelector(state => state.skills.skills);
    // const education = useAppSelector(state => state.education.education);
    // const experience = useAppSelector(state => state.experience.experience);

    const profile = props.profile;
    const skills = props.skills;
    const education = props.education;
    const experience = props.experience;
    console.log(props);

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


// const resume = ResumeStore();


export default WithPDFPreview(PdfTemplate);
// export default (PdfTemplate);



const RightSide = ({profile, education, experience})=>{
    // console.log(profile)
    return(
         
      <View style={styles.section_right}>
        <View style={styles.flex_col} >
            <Text style={ {...styles.right_section_headings, ...styles.border_right_section}}>Profession Summary</Text>
            <Text style={{...styles.section_right_font_colors_sm}}>{profile.job_description}</Text>
        </View>

        <View style={styles.flex_col}>
           <Text style={ {...styles.right_section_headings, ...styles.border_right_section}}>Education</Text>
           {education.map((education) => {
              return( 
                   <View style={styles.flex_col}>
                      <View style={styles.flex_row}>
                          <Text style={{...styles.section_right_font_colors}}>{education.qualification}</Text>
                          <Text style={{...styles.section_right_font_colors}}>{education.gpa_marks}</Text>
                      </View>
                      <View style={styles.flex_row}>
                          <Text style={styles.section_right_font_colors_sm}>{education.institution}</Text>
                          <Text style={styles.section_right_font_colors_sm}>{education.address}</Text>
                      </View>
                   </View>
              )
              
           })
          }
  
        </View> 
        <View style={ styles.flex_col}>
            <Text style={{...styles.right_section_headings, ...styles.border_right_section}}>Experience</Text> 
            {experience.map((experience: any) => {
                return(
                    <View style={ styles.flex_col }>
                        <View style={ styles.flex_row }>
                            <Text style={styles.section_right_font_colors_sm}>{experience.start_date+ ' - ' + (experience.is_currently_working? 'Present' : experience.end_date)}</Text>
                            <Text style={styles.section_right_font_colors}>{experience.company}</Text>

                        </View>
                        <View style={ styles.flex_row }>
                            <Text style={styles.section_right_font_colors_sm}>{experience.job_title}</Text>
                            <Text style={styles.section_right_font_colors_sm}>{experience.city}</Text>
                        </View>
                        <View style={ styles.flex_col}>
                            <Text style={ {...styles.right_section_headings}}>Working Summary</Text>
                            <Text style={styles.section_right_font_colors_sm}>{experience.description}</Text>
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
  
        <View style={{ display:'flex', flexDirection:'column', justifyContent:'flex-start', width:'100%'}} >
          {profile.image_url && 
              <Image style={styles.profile_img} src={profile.image_url} />
          }
          <Text style={styles.name_text}>{profile.name}</Text>
          <Text style={styles.profession_text}>{profile.job_title}</Text>

        </View>
        
        <View style={ {display: 'flex', flexDirection:'column', justifyContent:'flex-start', width: '100%'} }>
          <Text style={ {...styles.name_text, borderBottom: '1px', borderBottomColor:'white'}}>Contact</Text>
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
          <Text style={{...styles.name_text,borderBottom: '1px', borderBottomColor:'white'}}>Skills</Text>
  
          {Object.entries(skills).map(([key, val]) => {
                  return (
                      <View style={ styles.col}>
                          <Text style={ styles.profession_text }>{val['skill']}</Text>
                          <View style={{ flexDirection:'row', width: '100%', justifyContent:'space-between', alignContent:'center'}}>
                             <View style={ {display:'flex', justifyContent:'flex-start',  alignItems:'center', flexDirection:'row', width: '100%' }}>
                                <Text style={ { backgroundColor:'#41F674', height: '20%', width:  val['score']}}></Text>
                                <Text style={ { backgroundColor:'white', height: '20%', width: 100 - val['score']}}></Text>


                             </View>
                             <Text style={ { color:'white', marginLeft: 5, 'fontSize':'14px' }}>{val['score']}</Text>
                          </View>
                      </View>
                  )
              })
          }
        </View>
         
      </View>
      </View>
    )
}