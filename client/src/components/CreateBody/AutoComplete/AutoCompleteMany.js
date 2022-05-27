import * as React from 'react';
import PropTypes from 'prop-types';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';

const Root = styled('div')(
  ({ theme }) => `
  color: #616161,
  font-size: 1 rem;
`,
);

const InputWrapper = styled('div')(
  ({ theme }) => `
  width: 400px;
  border: 1.8px SOLID #e2e4e9;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 18px;
  &:focus-within {
    backgroundColor: #black,

  }
  &.focused {
    border-color: #405eec;
  }
  & input {
    box-sizing: border-box;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
  
`,
);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span className='autoCompleteManyCheck'>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 3px;
  line-height: 22px;
  background-color:  #e2e4e9;
  border-radius: 4px;
  box-sizing: content-box;
  padding: 2px 6px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: #405eec;
    backgroundColor: #405eec,
  }

  & span {
    color: #616161;
    font-site:1 rem;
    font-weight: 500;
    background-color:  #e2e4e9;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left:6px;
  }

  & svg {
    font-size:.6rem;
    font-weight: 500;
    color: #9ba3b2;
    cursor: pointer;
    padding: 4px;
  }
`,
);

const Listbox = styled('ul')(
  ({ theme }) => `
  width: 440px;
  height: 150px;
  top:0
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: white;
  overflow-y: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 2;
  & li {
    color: #616161;
    padding: 5px 12px;
    font-weight: 500;
  z-index: 2;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    font-weight: 500;


    color: #405eec;
    & svg {
    color: #405eec;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: #e2e4e9;
    cursor: pointer;

    & svg {
      color: none;
    }
  }
`,
);

export default function AutocompleteMany({arr}) {
  // có khai báo ở thẻ span bên trên cái autoCompleteManyCheck này
  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    autoCompleteManyCheck,
    setAnchorEl,
  } = useAutocomplete({
    multiple: true,
    options: arr,
    getOptionLabel: (option) => option.title,
  });


  // React.useEffect(()=>{
  //   const autoCompleteManyChecks = document.querySelectorAll('.autoCompleteManyCheck')
  //   //xóa các nút chọn còn lại nếu có trường không chọn
  //   for( const span of autoCompleteManyChecks){
  //     if(span.textContent.includes('- không chọn -')){
  //       for( var i=0 ; i< autoCompleteManyChecks.length ;i++){
  //         if(autoCompleteManyChecks[i].textContent !== '- không chọn -'){
  //           autoCompleteManyChecks[i].parentElement.children[1].children[0].click()
  //         }
  //       }
  //     }
  //   }

  // },)

  return (
    <Root>
         <div {...getRootProps()}>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option, index) => (
            <StyledTag label={option.title}  {...getTagProps({ index })} />
          ))}

          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.title}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
     
    </Root>
  );
}
