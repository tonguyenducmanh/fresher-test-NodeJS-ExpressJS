import styles from './SideBarLeft.module.css'

export const HandleCheck = () =>{
    const checked = document.getElementById('filterBoxList')
    for (var i = 0; i < checked.children.length; i++) {
            var ch = checked.children[i];
            ch.onclick = function (e) {
            if (this.classList.contains(styles.filterItemChecked)) {
                this.classList.add(styles.filterItem);
                this.classList.remove(styles.filterItemChecked);
            }
            else if(this.classList.contains(styles.filterItem)) {
                this.classList.add(styles.filterItemChecked);
                this.classList.remove(styles.filterItem);
            }
        };
    }

}