import styles from '../SideBarLeft.module.css'
export const HandleSideBarLeft= () => {
    const container = document.getElementById('container')
    const sideBarLeft = document.getElementById('sideBarLeft')
    const leftBox = document.getElementById('leftBox')
    const sideBarLeftButton = document.getElementById('sideBarLeftButton')
    const sideBarRight = document.getElementById('sideBarRight')
    const filterAction = document.getElementById('filterAction')
    const notifySuccess = document.getElementsByClassName(styles.notifySuccess)
    const filterItemChecked = document.getElementsByClassName(styles.filterItemChecked)
    if(sideBarLeft.style.flex !== '0 1 0px'){
        if( sideBarRight.style.flex !== '0 1 0px'){
            console.log('hihi')
            leftBox.style.display = 'none'
            filterAction.style.display ='none'
            sideBarLeft.style.flex = '0 1 0px'
            container.style.flex = '4 1 0px'
            sideBarRight.style.flex = '1 1 0px'
            notifySuccess[0].classList.remove(styles.notifySuccessAni)
            console.log(notifySuccess[0])
        } else{
            leftBox.style.display = 'none'
            filterAction.style.display ='none'
            sideBarLeft.style.flex = '0 1 0px'
            container.style.flex = '5 1 0px'
            notifySuccess[0].classList.remove(styles.notifySuccessAni)
            console.log(notifySuccess[0])
        }
    }else{
        if(sideBarRight.style.flex !== '0 1 0px'){
            leftBox.style.display = 'block'
            if(filterItemChecked.length>0){
            filterAction.style.display ='flex'
            }
            sideBarLeft.style.flex = '1 1 0px'
            container.style.flex = '3 1 0px'
            sideBarRight.style.flex = '1 1 0px'
        } else{
            leftBox.style.display = 'block'
            if(filterItemChecked.length>0){
                filterAction.style.display ='flex'
                }
            sideBarLeft.style.flex = '1 1 0px'
            container.style.flex = '4 1 0px'
        }
    }
    if(sideBarLeftButton.style.hasOwnProperty('--bgPositionTwo', '-304px -32px')){
        sideBarLeftButton.style.setProperty('--bgPositionTwo', '-288px -32px')
    }
    else{
        sideBarLeftButton.style.setProperty('--bgPositionTwo', '304px -32px')
    } 
}