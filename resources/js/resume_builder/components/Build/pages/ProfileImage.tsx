import React from 'react';
import ImageUploading from 'react-images-uploading';
import { useAppDispatch } from '../../../store/store';
import { postProfileImage } from '../reducers/profileReducer';
import { useAppSelector } from '../../../store/hooks';

export default  function ProfielImage() {
  const dispatch = useAppDispatch();  
  const profile_id = useAppSelector(state => state.profile.profile_id);
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
    postImage(imageList);
  };

  const postImage = (imagelist) => {
    // console.log(images, imagelist);
    const data = {profile_id: profile_id, imageList: imagelist};
    dispatch(postProfileImage(data));
    
  }

  return (
    <div className="">
      <ImageUploading
        multiple={false}
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="flex flex-col w-full bg-gray-400 h-full">
            <button className='border-b-2 bg-white'
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click/Drop
            </button>
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="flex flex-col w-full">
                <img className='h-full w-full p-2' src={image['data_url']} alt="" width="100" />
                
                 <div className="flex flex-row w-full bg-slate-200">
                   <button className='py-0.5 px-2 text-blue-600 text-lg w-full' onClick={() => onImageUpdate(index)}><i className='fa fa-pencil'></i></button>
                   <button className='py-0.5 px-2 text-red-600 text-lg w-full' onClick={() => onImageRemove(index)}><i className='fa fa-minus'></i></button>
                 </div>
              </div>
            ))}

          </div>
        )}
      </ImageUploading>
    </div>
  );
}