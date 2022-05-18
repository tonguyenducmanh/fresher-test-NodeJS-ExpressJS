export const HandleSideBarLeft= () => {
    const sideBarLeft = document.getElementById('sideBarLeft')
    const sideBarLeftButton = document.getElementById('sideBarLeftButton')
    const sideBarRightButton = document.getElementById('sideBarRightButton')
    if(sideBarRightButton.style.right !== '0%'){
        if(sideBarLeft.style.width !=='0%'){
            sideBarLeft.style.width='0%'
            sideBarLeftButton.style.left= '0%'
            sideBarRightButton.style.right= '23.1%'
            sideBarLeftButton.style.setProperty('--bgPositionOne', '-304px -32px')
        } else{
            sideBarLeft.style.width='30%'
            sideBarLeftButton.style.left= '18.8%'
            sideBarRightButton.style.right= '18.8%'
            sideBarLeftButton.style.setProperty('--bgPositionOne', '-288px -32px')
        }
    } else{
        if(sideBarLeft.style.width !=='0%'){
            sideBarLeft.style.width='0%'
            sideBarLeftButton.style.left= '0%'
            sideBarRightButton.style.right= '0%'
            sideBarLeftButton.style.setProperty('--bgPositionOne', '-304px -32px')
        } else{
            sideBarLeft.style.width='30%'
            sideBarLeftButton.style.left= '23.1%'
            sideBarRightButton.style.right= '0%'
            sideBarLeftButton.style.setProperty('--bgPositionOne', '-288px -32px')
        }
    }
}