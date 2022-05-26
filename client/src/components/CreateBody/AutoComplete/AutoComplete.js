import * as React from 'react';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';

import styles from '../CreateBody.module.css'

const Input = styled('input')(({ theme }) => ({
    fontWeight: '500',
    position: "relative",
    height: 15,
    border: "SOLID #e2e4e9",
    borderWidth: 1.8,
    borderRadius: 4,
    padding: "10px 18px",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.getContrastText(theme.palette.background.paper),
}));

const Listbox = styled('ul')(({ theme }) => ({
    fontWeight: '500',
    width: 436,
    margin: 0,
    marginTop: '-2px',
    marginLeft: '-20px',
    border: "SOLID #e2e4e9",
    borderWidth: 1.8,
    borderRadius: 4,
    zIndex: 3,
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: theme.palette.background.paper,
    overflowY: 'auto',
    maxHeight: 220,
    [`& li.${autocompleteClasses.focused}`]: {
        backgroundColor: '#e2e4e9',
        cursor: 'pointer',
        width: '400px'
    },
    '& li': {
        padding: "10px 18px",
        width: '400px',
        color: '#616161',
        fontSize:'.9rem'
    },
    '& li:hover': {
        backgroundColor: '#e2e4e9',
    },
}));

export default function UseAutocomplete({arr}) {
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    options: arr,
    getOptionLabel: (option) => option.title,
  });
    const handleClickComBo = (e) => {
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].innerHTML = e.target.textContent
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.color = '#616161'
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].style.display='none'
        console.log(e.target.textContent)
    }
  return (
    <div>
      <div {...getRootProps()}>
        <Input {...getInputProps()} placeholder="Tìm kiếm"className={styles.thongTinComboInput}/>
        {groupedOptions.length > 0 ? (
            <Listbox {...getListboxProps()} onClick={handleClickComBo}>
            {groupedOptions.map((option, index) => (
                <li {...getOptionProps({ option, index })} >{option.title}</li>
                ))}
            </Listbox>
        ) : null}
        </div>
    </div>
  );
}

