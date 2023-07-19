import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image, Link } from '@react-pdf/renderer';
import { useAppSelector } from "../../../store/hooks";
import { WithPDFPreview } from "../WithPDFPreview";
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
        display:'flex',
        padding: 15,
        // paddingTop: 20,
        width: '100%',
        // height: '70%',

        // backgroundColor: '#F1F3F7',
        fontFamily: 'Helvetica-Bold',
      },
      section_top: {
        width: '100%',
        // height: '50%',
        backgroundColor: '#E5E9EE',
      },

      profile_container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'flex-start',
        fontFamily: 'Helvetica-Bold',
        marginLeft: 20,
        marginRight: 20,
        // marginTop: '20',
        // marginBottom: '20',
        // padding:20,
        // margin: 20,
        // height: '100%',
        // // width:'100%',
      },
      name_text: {
        paddingTop: '5px',
        paddingBottom: '5px',
        fontSize: '13px',
        fontWeight: '500',
        color: '#212324',
      },

      contact_family: {
        fontSize: '11px',
        fontWeight: '800',
        color: '#475569',
        fontStyle: 'italic',
        marginLeft: '5px'
      },

      field_text: {
        paddingTop: '5px',
        paddingBottom: '2px',
        fontSize: '10px',
        fontWeight: '600',
        color: '#212324',
        // marginLeft: 10
      },

      field_text_sm: {
        fontSize: '11px',
        fontWeight:'600',
        color: '#7E8387',
        paddingTop: '2',
        marginLeft: 10
      },
      profession_text: {
        color: '#023579',
        fontSize: '11px',
        fontWeight: '500',
        paddingTop:'5px',
      },
      profile_img: {
        width: '80px',
        height: '70px',
        borderRadius:'100',
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
        fontSize: '10px',
        fontWeight:'600',
        color: '#475569',
        paddingTop: '5px',
        paddingBottom: 5,
      },

      border_y: {
         borderBottom:'1px',
         borderBottomColor:'#B4AEAD', 
         borderTop: '1px', 
         borderTopColor:'#B4AEAD',
         paddingBottom: 5,
         marginBottom: 5
      }

    });


const PdfTemplateBasic = (props) => {

    // const profile = useAppSelector(state => state.profile.profile);
    // const skills = useAppSelector(state => state.skills.skills);
    // const education = useAppSelector(state => state.education.education);
    // const experience = useAppSelector(state => state.experience.experience);

    const profile = props.profile;
    const skills = props.skills;
    const education = props.education;
    const experience = props.experience;
    const softskills = props.softskills;
    console.log(props);

    return(
        <Document>
            {/* {profile.length > 0  &&  */}
        <Page size="A4" style={styles.page}>

          <View style={styles.flex_col}>
            <UpperSection profile={profile}></UpperSection>

            <LowerSection profile={profile} education={education}  experience={experience} skills={skills} softskills={softskills}></LowerSection>
            </View>
        </Page>
        {/* } */}
    </Document>
    )
}


// const resume = ResumeStore();


export default WithPDFPreview(PdfTemplateBasic);
// export default (PdfTemplate);



const LowerSection = ({profile, education, experience, skills, softskills})=>{
    // console.log(profile)
    return(
         
      <View style={styles.section_right}>
        {/* <View style={styles.flex_col} >
            <Text style={ {...styles.right_section_headings, ...styles.border_right_section}}>Profession Summary</Text>
            <Text style={{...styles.section_right_font_colors_sm}}>{profile.job_description}</Text>
        </View> */}
        <View style={ {...styles.flex_col}} >
            <Text style={ {...styles.name_text,  color: 'gray', ...styles.border_y }}>Professional Summary</Text>
            <Text style={{...styles.section_right_font_colors_sm}}>{profile.job_description}</Text>
        </View>


        <View style={ {display: 'flex', flexDirection:'column', justifyContent:'flex-start', width: '100%'} }>
          <Text style={{...styles.name_text, ...styles.border_y, color: 'gray'}}>Technical Skills</Text>
          <View style={ {display: 'flex', flexDirection:'row', justifyContent:'flex-start', width: '100%', flexWrap: 'wrap'} }>

          {Object.entries(skills).map(([key, val]) => {
                  return (
                      <View style={ {display:'flex', flexDirection:'column', justifyContent:'flex-start', width: '33.33%'}}>
                          <Text style={ styles.contact_family }>{val['skill']}</Text>
                          <View style={{ flexDirection:'row', width:'100%', marginLeft: 5, justifyContent:'flex-start', alignContent:'center'}}>
                             <View style={ {display:'flex', justifyContent:'flex-start',  alignItems:'center', flexDirection:'row' }}>
                                <Text style={ { backgroundColor:'#1C0FF4', height: '40%', width:  val['score']}}></Text>
                                <Text style={ { backgroundColor:'gray', height: '40%', width: 100 - val['score']}}></Text>
                             </View>
                             <Text style={ { color:'gray', marginLeft: 5, 'fontSize':'9px' }}>{val['score']}</Text>
                          </View>
                      </View>
                   
                  )
              })
          }
         </View>
        </View>

        {softskills.length && 

        <View style={styles.flex_col} >
            <Text style={ {...styles.name_text, ...styles.border_y, color: 'gray'}}>Personality Traits</Text>
            <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap' , width:'100%'}} >

              {softskills.map((v,k) => 

                  <Text style={{marginTop:'5px', backgroundColor:'#6b7280', padding:7, marginLeft:'3px', fontSize: 12, color:'white', fontFamily: 'Helvetica-Bold', fontWeight:'extrabold'}}>{v.key}</Text>
              )}
            </View>

        </View>   
}  
        { education.length &&
          <View style={styles.flex_col}>
            <Text style={ {...styles.name_text, ...styles.border_y, color: 'gray'}}>Education</Text>
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
      }
      { experience.length &&
        <View style={ styles.flex_col} break>
              <Text style={ {...styles.name_text, ...styles.border_y, color: 'gray'}}>Experience</Text>
            { experience.map((experience: any) => {
                return(
                    <View style={ styles.flex_col }>
                        <View style={ styles.flex_row }>
                            <Text style={styles.section_right_font_colors_sm}>{experience.start_date+ ' - ' + (experience.is_currently_working ? 'Present' : experience.end_date)}</Text>
                            <Text style={styles.section_right_font_colors}>{experience.company}</Text>

                        </View>
                        <View style={ styles.flex_row }>
                            <Text style={styles.section_right_font_colors_sm}>{experience.job_title}</Text>
                            <Text style={styles.section_right_font_colors_sm}>{experience.city}</Text>
                        </View>
                        {experience.description &&
                          <View style={ styles.flex_col}>
                              <Text style={ {...styles.right_section_headings}}>Profession Summary</Text>
                              <Text style={styles.section_right_font_colors_sm}>{experience.description}</Text>
                          </View>
                        }

                    </View>
                 )

                 })
             }
        </View>
      }
        
        {/* <View style={ {display: 'flex', flexDirection:'column', justifyContent:'flex-start', width: '100%'} }>
          <Text style={{...styles.name_text, ...styles.border_y}}>Skills</Text>
          <View style={ {display: 'flex', flexDirection:'row', justifyContent:'flex-start', width: '100%'} }>

          {Object.entries(skills).map(([key, val]) => {
                  return (
                      <View style={ {display: 'flex', flexDirection:'column', justifyContent:'space-between', width: '50%'}}>
                          <Text style={ styles.contact_family }>{val['skill']}</Text>
                          <View style={{ flexDirection:'row', width:'100%', marginLeft: 5, justifyContent:'flex-start', alignContent:'center'}}>
                             <View style={ {display:'flex', justifyContent:'flex-start',  alignItems:'center', flexDirection:'row' }}>
                                <Text style={ { backgroundColor:'#1C0FF4', height: '40%', width:  val['score']}}></Text>
                                <Text style={ { backgroundColor:'gray', height: '40%', width: 100 - val['score']}}></Text>
                             </View>
                             <Text style={ { color:'gray', marginLeft: 5, 'fontSize':'9px' }}>{val['score']}</Text>
                          </View>
                      </View>
                   
                  )
              })
          }
         </View>
        </View> */}
        
      </View>
    )
}
const UpperSection = ({profile})=>{

    return(
         
        <View style={styles.section_top}>
        <View style={styles.profile_container}>
  
        <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%', marginBottom:'5'}} >
          
          <View style={{ display:'flex', flexDirection:'column', justifyContent:'flex-start', width:'100%'}} >
            <Text style={styles.name_text}>{profile.name}</Text>
            <View style={ {display: 'flex', flexDirection:'row', justifyContent:'flex-start', width: '100%'} }>
                <Text style={{...styles.field_text,marginRight:3, fontSize: 8 ,fontWeight: 600, color: 'black'}}>Title</Text>
                <Text style={styles.profession_text}>{profile.job_title}</Text>
            </View>
          </View>
          {/* <View style={{ display:'flex', flexDirection:'column', justifyContent:'flex-end', width:'100%', marginBottom:'5'}} > */}
            {profile.image_url && 
                <Image style={styles.profile_img} src={profile.image_url} />
            }
          {/* </View> */}
          

        </View>
        
        <View style={ {display: 'flex', flexDirection:'column', justifyContent:'space-between', width: '100%', paddingBottom:'10'} }>
          <Text style={ {...styles.name_text, borderBottom: '1px', borderBottomColor:'white', borderTop:'1px', borderTopColor:'white' }}>Contact</Text>
          
          <View style={ {display: 'flex', flexDirection:'row', justifyContent:'space-between', width: '100%'} }>
            <View style={ {display: 'flex', flexDirection:'column', justifyContent:'flex-start', width: '50%'} }>
                <Text style={ styles.field_text }>Email</Text>
                <Text style={ styles.contact_family }>{profile.email}</Text>
                <Text style={ styles.field_text }>Phone</Text>
                <Text style={ styles.contact_family}>{profile.phone}</Text>
                { profile.address && 
                  <View style={ {display: 'flex', flexDirection:'column', justifyContent:'flex-start', width: '100%'} }>
                    <Text style={ styles.field_text}>Address</Text>
                    <Text style={ styles.contact_family}>{profile.address}</Text>
                  </View>
                }
            </View>  
            <View style={ {...styles.flex_col, width: '50%' }}>
              {profile.linkedin_url &&
              <View>
                  <Text style={ styles.field_text } >LinkedIn</Text>
                  {/* <Text style={ styles.contact_family }>{profile.linkedin_url}</Text> */}
                  <Link src={profile.linkedin_url} style={ styles.contact_family }>{profile.linkedin_url}</Link>

              </View>
              }
              {profile.github_url && 
              <View>
                  <Text style={ styles.field_text } >Github</Text>
                  <Text style={ styles.contact_family}>{profile.github_url}</Text>
                </View>
              }
              {profile.twitter_url &&
              <View>
                  <Text style={ styles.field_text }>Twitter</Text>
                  <Text style={ styles.contact_family}>{profile.twitter_url}</Text>
                </View>
              }

            </View>  
            </View>        
        </View>



        {/* <View style={ {...styles.flex_col}} >
            <Text style={ {...styles.name_text, borderBottom:'1px', borderBottomColor:'white',color: 'gray',borderTop: '1px', borderTopColor:'white'}}>Profession Summary</Text>
            <Text style={{...styles.section_right_font_colors_sm}}>{profile.job_description}</Text>
        </View> */}
       
  
        {/* <View style={ {display: 'flex', flexDirection:'column', justifyContent:'flex-start', width: '100%'} }>
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
        </View> */}
         
      </View>
      </View>
    )
}