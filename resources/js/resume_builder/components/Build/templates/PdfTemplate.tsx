import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image, Link } from '@react-pdf/renderer';
import { useAppSelector } from "../../../store/hooks";
import { color } from "html2canvas/dist/types/css/types/color";
import { display } from "html2canvas/dist/types/css/property-descriptors/display";
import { WithPDFPreview } from "../WithPDFPreview";
import { ResumeStore } from "../partials/useResumeStore";
import SOftSkills from "../pages/SoftSkills";

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
    const softskills = props.softskills;

    console.log(props);

    return(
        <Document>
            {/* {profile.length > 0  &&  */}
        <Page size="A4" style={styles.page}>
            <LefttSide profile={profile} education={education} skills={skills}></LefttSide>
            <RightSide profile={profile} experience={experience} education={education} softskills={softskills}></RightSide>
        </Page>
        {/* } */}
    </Document>
    )
}


// const resume = ResumeStore();


export default WithPDFPreview(PdfTemplate);
// export default (PdfTemplate);



const RightSide = ({profile, education, experience, softskills})=>{
    // console.log(profile)
    return(
         
      <View style={styles.section_right}>
        <View style={styles.flex_col} >
            <Text style={ {...styles.right_section_headings, ...styles.border_right_section}}>Profession Summary</Text>
            <Text style={{...styles.section_right_font_colors_sm}}>{profile.job_description}</Text>
        </View>

        {softskills && 

        <View style={styles.flex_col} >
            <Text style={ {...styles.right_section_headings, ...styles.border_right_section}}>Personality Traits</Text>
            <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap' , width:'100%'}} >

              {softskills.map((v,k) => 

                  <Text style={{...styles.section_right_font_colors_sm,marginTop:'4px', marginLeft:'2px', fontSize:'14px', borderBottom:'1px', color:'#031F64', fontStyle:'italic', fontWeight:'extrabold'}}>{v.key}</Text>
              )}
            </View>

        </View>   
        }     

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
                        { experience.description &&
                        <View style={ styles.flex_col}>
                            <Text style={ {...styles.right_section_headings}}>Working Summary</Text>
                            <Text style={styles.section_right_font_colors_sm}>{experience.description}</Text>
                        </View>
                       }
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
        <View>
     
                                                {/* <Link src={profile.linkedin_url}>
                                                       
                                                <svg
                                                    className="w-6 h-6 text-blue-500 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512">
                                                    <path
                                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                                    ></path>
                                                    </svg>
                                                    </Link> */}

                                                {/* <Link src={profile.twitter_url}
                                                        >
                                                    <svg
                                                    className="w-6 h-6 text-blue-300 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                                    />
                                                    </svg>
                                                    </Link>
                                                    <Link src={profile.github_url}
                                                        >
                                                        <svg className="w-6 h-6 text-blue-300 fill-current" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet"
                                                            viewBox="0 32 447.99999999999994 448" xmlns="http:www.w3.org/2000/svg" width="2500"
                                                            height="2321">
                                                            <g fill="none">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                    d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
                                                                    fill="currentColor" />
                                                            </g>
                                                        </svg>
                                                    </Link> */}
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