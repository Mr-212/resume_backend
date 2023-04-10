import React from "react";
import Modal from 'react-modal';
import ReactModal from 'react-modal';






const customStyles = {

    // overlay: {
    //   // backgroundColor: 'gray',
    //   margin: '0 0 0 0 '
    // },
    content: {
      // backgroundColor: 'gray',
      marginTop: -10,
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '500px',
      border: '10px'
      // transition: 'opacity 2000ms ease-in-out',
      // height: '300px',


      // backgroundColor: "gray"
    },
    // overlay:{
    //   backgroundColor: "gray"
    // }
  };
  // ReactModal.defaultStyles.overlay.backgroundColor = 'cornsilk';

const CreateResumeBtnModal = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return(
        <div className="align-middle" id="resumeModal">
            <button onClick={openModal} className="text-left align-middle text-2xl px-10 text-slate-200"><i className="fa fa-plus"></i></button>

              <ReactModal
                  isOpen={modalIsOpen}
                  // onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Create Resume"
                  parentSelector={() => document.querySelector('#resumeModal')}
              >
              <div className="bg-white  w-full">

                <div className="flex flex-row items-center bg-gray-400 opacity-100 text-black w-full">
                    <h4 className="font-bold text-lg">Resume</h4>
                </div>
                  <div className="py-6 space-y-2">
                
                    {/* <form className="space-y-6" action="/resume/create" method="get"> */}
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required></input>
                        </div>
                        <div className="w-full text-right">
                            <button type="button" className=""><span className="py-1 px-4 bg-blue-400 shadow-md opacity-100 text-white font-bold text-lg text-right">Save</span></button>
                        </div>   
                        
                    {/* </form> */}
                </div>
                </div>
              </ReactModal>
           
        </div>
    )
}


export default CreateResumeBtnModal;