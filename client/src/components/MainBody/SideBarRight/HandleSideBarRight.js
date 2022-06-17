export  const HandleSideBarRight= () => {
    const container = document.getElementById('container')
    const sideBarRight = document.getElementById('sideBarRight')
    const rightBox = document.getElementById('rightBox')
    const sideBarRightButton = document.getElementById('sideBarRightButton')
    const sideBarLeft = document.getElementById('sideBarLeft')
    if(sideBarRight.style.flex !== '0 1 0px'){
        if( sideBarLeft.style.flex !== '0 1 0px'){
            console.log('hihi')
            rightBox.style.display = 'none'
            sideBarRight.style.flex = '0 1 0px'
            container.style.flex = '4 1 0px'
            sideBarLeft.style.flex = '1 1 0px'
        } else{
            rightBox.style.display = 'none'
            sideBarRight.style.flex = '0 1 0px'
            container.style.flex = '5 1 0px'
        }
    }else{
        if(sideBarLeft.style.flex !== '0 1 0px'){
            rightBox.style.display = 'block'
            sideBarRight.style.flex = '1 1 0px'
            container.style.flex = '3 1 0px'
            sideBarLeft.style.flex = '1 1 0px'
        } else{
            rightBox.style.display = 'block'
            sideBarRight.style.flex = '1 1 0px'
            container.style.flex = '4 1 0px'
        }
    }
    if(sideBarRightButton.style.hasOwnProperty('--bgPositionTwo', '-288px -32px')){
        sideBarRightButton.style.setProperty('--bgPositionTwo', '-304px -32px')
    }
    else{
        sideBarRightButton.style.setProperty('--bgPositionTwo', '-288px -32px')
    }

}