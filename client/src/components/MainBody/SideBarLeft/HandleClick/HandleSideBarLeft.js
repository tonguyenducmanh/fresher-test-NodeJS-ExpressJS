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
        sideBarLeftButton.style.setProperty('--bgPositionOne', '-304px -32px')
        if( sideBarRight.style.flex !== '0 1 0px'){
            leftBox.style.display = 'none'
            filterAction.style.display ='none'
            sideBarLeft.style.flex = '0 1 0px'
            container.style.flex = '4 1 0px'
            sideBarRight.style.flex = '1 1 0px'
            notifySuccess[0].classList.remove(styles.notifySuccessAni)
        } else{
            leftBox.style.display = 'none'
            filterAction.style.display ='none'
            sideBarLeft.style.flex = '0 1 0px'
            container.style.flex = '5 1 0px'
            notifySuccess[0].classList.remove(styles.notifySuccessAni)
        }
    }else{
        sideBarLeftButton.style.setProperty('--bgPositionOne', '-288px -32px')
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
}