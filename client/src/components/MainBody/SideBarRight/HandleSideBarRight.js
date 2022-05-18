export  const HandleSideBarRight= () => {
    const sideBarRight = document.getElementById('sideBarRight')
    const sideBarRightButton = document.getElementById('sideBarRightButton')
    const sideBarLeftButton = document.getElementById('sideBarLeftButton')
    if(sideBarLeftButton.style.left !== '0%'){
        if(sideBarRight.style.width !=='0%'){
            sideBarRight.style.width='0%'
            sideBarRightButton.style.right= '0%'
            sideBarRightButton.style.setProperty('--bgPositionTwo', '-288px -32px')
            sideBarLeftButton.style.left= '23.1%'
        } else{
            sideBarRight.style.width='30%'
            sideBarRightButton.style.right= '18.8%'
            sideBarLeftButton.style.left= '18.8%'
            sideBarRightButton.style.setProperty('--bgPositionTwo', '-304px -32px')
        }
    }else{
        if(sideBarRight.style.width !=='0%'){
            sideBarRight.style.width='0%'
            sideBarRightButton.style.right= '0%'
            sideBarRightButton.style.setProperty('--bgPositionTwo', '-288px -32px')
            sideBarLeftButton.style.left= '0%'
        } else{
            sideBarRight.style.width='30%'
            sideBarRightButton.style.right= '23.1%'
            sideBarLeftButton.style.left= '0%'
            sideBarRightButton.style.setProperty('--bgPositionTwo', '-304px -32px')
        }
    }
}