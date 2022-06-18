export  const HandleSideBarRight= () => {
    const container = document.getElementById('container')
    const sideBarRight = document.getElementById('sideBarRight')
    const rightBox = document.getElementById('rightBox')
    const sideBarRightButton = document.getElementById('sideBarRightButton')
    const sideBarLeft = document.getElementById('sideBarLeft')
    const doc = document.documentElement.clientWidth
    if(doc>=1900){
        if(sideBarRight.style.flex !== '0 1 0px'){
            sideBarRightButton.style.setProperty('--bgPositionTwo', '-288px -32px')
            if( sideBarLeft.style.flex !== '0 1 0px'){
                rightBox.style.display = 'none'
                sideBarRight.style.flex = '0 1 0px'
                container.style.flex = '6.2 1 0px'
                sideBarLeft.style.flex = '1 1 0px'
            } else{
                rightBox.style.display = 'none'
                sideBarRight.style.flex = '0 1 0px'
                container.style.flex = '7.2 1 0px'
            }
        }else{
            sideBarRightButton.style.setProperty('--bgPositionTwo', '-304px -32px')
            if(sideBarLeft.style.flex !== '0 1 0px'){
                rightBox.style.display = 'block'
                sideBarRight.style.flex = '1.2 1 0px'
                container.style.flex = '5 1 0px'
                sideBarLeft.style.flex = '1 1 0px'
            } else{
                rightBox.style.display = 'block'
                sideBarRight.style.flex = '1.2 1 0px'
                container.style.flex = '6 1 0px'
            }
        }
    }
    else{
        if(sideBarRight.style.flex !== '0 1 0px'){
            sideBarRightButton.style.setProperty('--bgPositionTwo', '-288px -32px')
            if( sideBarLeft.style.flex !== '0 1 0px'){
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
            sideBarRightButton.style.setProperty('--bgPositionTwo', '-304px -32px')
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
    }

}