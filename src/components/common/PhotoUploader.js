import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box } from '@mui/system';
function PhotoUploader() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the accepted files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box alignItems="center" 
    justifyContent={"center"} 
    margin="auto" {...getRootProps()}>
    
              <input {...getInputProps()} />
      {isDragActive ? (
        <p></p>
      ) : (
        <p  >Add picture here</p>
      )}
    
    
   
     
    </Box>
  );
}

export default PhotoUploader;
