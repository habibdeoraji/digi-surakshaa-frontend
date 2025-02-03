import { useState, useCallback } from 'react';
import {
  Box,
  TextField,
  Typography,
  CircularProgress,
  IconButton,
  Tooltip,
  Zoom,
  Dialog,
  DialogContent,
  styled,
  alpha,
  Paper,
} from '@mui/material';
import {
  Send,
  Close,
  AttachFile,
  Image as ImageIcon,
  FilePresent,
  InsertDriveFile,
  ZoomIn,
  CloudUpload,
} from '@mui/icons-material';
import PropTypes from 'prop-types';

const FormWrapper = styled(Paper)(() => ({
  position: 'relative',
  overflow: 'hidden',
}));

const InputContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.spacing(2),
  border: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
  backgroundColor: alpha(theme.palette.background.paper, 0.8),
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.3),
  },
  '&:focus-within': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    border: 'none',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2, 2.5),
    backgroundColor: 'transparent',
    '& fieldset': {
      border: 'none',
    },
  },
  '& .MuiOutlinedInput-input': {
    minHeight: '120px',
    lineHeight: '1.6',
    fontSize: '1rem',
    fontWeight: 400,
    color: theme.palette.text.primary,
    '&::placeholder': {
      color: alpha(theme.palette.text.primary, 0.5),
      opacity: 1,
    },
  },
}));

const ActionBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1.5, 2),
  borderTop: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
  backgroundColor: alpha(theme.palette.background.default, 0.5),
}));

const FilePreviewContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: alpha(theme.palette.background.default, 0.5),
  borderRadius: theme.spacing(2),
  margin: theme.spacing(2),
}));

const FilePreview = styled(Box)(({ theme, isImage }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(1),
  borderRadius: theme.spacing(1.5),
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: isImage ? 'scale(1.01)' : 'translateX(4px)',
    backgroundColor: theme.palette.background.paper,
    boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.05)}`,
  },
}));

const ImagePreviewContainer = styled(Box)(({ theme }) => ({
  width: 120,
  height: 80,
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  position: 'relative',
  flexShrink: 0,
  backgroundColor: alpha(theme.palette.primary.main, 0.05),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
}));

const PreviewImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const PreviewOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: alpha(theme.palette.common.black, 0.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
  cursor: 'pointer',
}));

const DropzoneOverlay = styled(Box)(({ theme, isDragActive }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: alpha(theme.palette.primary.main, 0.05),
  borderRadius: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: isDragActive ? 1 : 0,
  pointerEvents: 'none',
  transition: 'opacity 0.2s ease-in-out',
  border: `2px dashed ${theme.palette.primary.main}`,
  '& .MuiSvgIcon-root': {
    fontSize: 48,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
}));

const ActionIconButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(1.2),
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    transform: 'scale(1.05)',
  },
}));


const FileTypeIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 36,
  height: 36,
  borderRadius: theme.spacing(1),
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
}));

const VerificationForm = ({ onSubmit, isLoading }) => {
  const [text, setText] = useState('');
  const [files, setFiles] = useState([]);
  const [isDragActive, setIsDragActive] = useState(false);
  const [previewDialogOpen, setPreviewDialogOpen] = useState(false);
  const [selectedPreview, setSelectedPreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() || files.length > 0) {
      const data = {
        type: files.length > 0 ? 'files' : 'text',
        content: files.length > 0 ? files : text,
      };
      onSubmit(data);
    }
  };

  const handleFileSelect = useCallback((e) => {
    const validFiles = Array.from(e.target.files).filter(file => 
      file.type.startsWith('image/') || 
      file.type === 'application/pdf' ||
      file.type === 'text/plain'
    );

    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFiles(prev => [...prev, {
          file,
          preview: file.type.startsWith('image/') ? reader.result : null,
          name: file.name,
          type: file.type,
          size: file.size,
        }]);
      };
      if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file);
      } else {
        reader.readAsText(file);
      }
    });
  }, []);

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (fileType) => {
    if (fileType.startsWith('image/')) {
      return <ImageIcon sx={{ fontSize: 20 }} />;
    }
    if (fileType === 'application/pdf') {
      return <InsertDriveFile sx={{ fontSize: 20 }} />;
    }
    return <FilePresent sx={{ fontSize: 20 }} />;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const handlePreviewClick = (preview) => {
    setSelectedPreview(preview);
    setPreviewDialogOpen(true);
  };

  const renderFilePreview = (file, index) => {
    const isImage = file.type.startsWith('image/');

    return (
      <Zoom in key={index} style={{ transitionDelay: `${index * 50}ms` }}>
        <FilePreview isImage={isImage}>
          {isImage ? (
            <ImagePreviewContainer>
              <PreviewImage src={file.preview} alt={file.name} />
              <PreviewOverlay 
                className="preview-overlay"
                onClick={() => handlePreviewClick(file.preview)}
              >
                <ZoomIn sx={{ color: 'white' }} />
              </PreviewOverlay>
            </ImagePreviewContainer>
          ) : (
            <FileTypeIcon>
              {getFileIcon(file.type)}
            </FileTypeIcon>
          )}
          <Box sx={{ ml: 2, flex: 1, minWidth: 0 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
              {file.name}
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              {formatFileSize(file.size)}
              <Box 
                component="span" 
                sx={{ 
                  width: 4, 
                  height: 4, 
                  borderRadius: '50%', 
                  backgroundColor: 'text.disabled' 
                }} 
              />
              {file.type.split('/')[1].toUpperCase()}
            </Typography>
          </Box>
          <Tooltip title="Remove file" placement="left">
            <ActionIconButton
              size="small"
              onClick={() => removeFile(index)}
              sx={{ 
                color: 'error.main',
                '&:hover': {
                  backgroundColor: alpha('#ff0000', 0.1),
                }
              }}
            >
              <Close fontSize="small" />
            </ActionIconButton>
          </Tooltip>
        </FilePreview>
      </Zoom>
    );
  };

  return (
    <FormWrapper elevation={0}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="body2" color="text.secondary" sx={{textAlign: "center"}}>
          Our AI-powered system will analyze your content for potential scam indicators
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit}>
        <InputContainer
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragActive(true);
          }}
          onDragLeave={() => setIsDragActive(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragActive(false);
            handleFileSelect({ target: { files: e.dataTransfer.files } });
          }}
        >
          <StyledTextField
            fullWidth
            multiline
            placeholder="Enter text or drop files here to verify..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isLoading}
          />
          
          <DropzoneOverlay isDragActive={isDragActive}>
            <CloudUpload sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" color="primary.main">
              Drop files here
            </Typography>
          </DropzoneOverlay>

          {files.length > 0 && (
            <FilePreviewContainer>
              <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary' }}>
                Uploaded Files ({files.length})
              </Typography>
              {files.map((file, index) => renderFilePreview(file, index))}
            </FilePreviewContainer>
          )}

          <ActionBar>
            <input
              type="file"
              accept="image/*,application/pdf,text/plain"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
              id="file-input"
              multiple
            />
            <Tooltip title="Attach files" placement="top">
              <label htmlFor="file-input">
                <IconButton
                  component="span"
                  color="primary"
                  disabled={isLoading}
                  sx={{
                    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                    '&:hover': {
                      backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.15),
                    },
                  }}
                >
                  <AttachFile />
                </IconButton>
              </label>
            </Tooltip>

            <Box sx={{ flex: 1 }} />

            <Typography variant="caption" color="text.secondary" sx={{ mr: 2 }}>
              {!text.trim() && files.length === 0 
                ? "Enter text or upload files to verify" 
                : `${files.length} files selected${text.trim() ? ' with text' : ''}`}
            </Typography>

            <Tooltip 
              title={
                !text.trim() && files.length === 0 
                  ? "Enter text or upload files" 
                  : "Verify content"
              }
              placement="top"
            >
              <span>
                <IconButton
                  type="submit"
                  disabled={(!text.trim() && files.length === 0) || isLoading}
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'common.white',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                    '&.Mui-disabled': {
                      backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.5),
                      color: 'common.white',
                    },
                  }}
                >
                  {isLoading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    <Send />
                  )}
                </IconButton>
              </span>
            </Tooltip>
          </ActionBar>
        </InputContainer>
      </Box>

      {/* Image Preview Dialog */}
      <Dialog
        open={previewDialogOpen}
        onClose={() => setPreviewDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={() => setPreviewDialogOpen(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <Close />
          </IconButton>
          <img
            src={selectedPreview}
            alt="Preview"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </DialogContent>
      </Dialog>
    </FormWrapper>
  );
};

VerificationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default VerificationForm; 