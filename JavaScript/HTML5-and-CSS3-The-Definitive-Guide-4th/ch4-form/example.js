function Validate() {
    const txtName = document.getElementById('txt_name')
    const button  = document.getElementById('btnValidate')
    const form    = document.getElementById('testform')
    if (txtName.value.trim() == "") {
        if (txtName.labels.length == 1) {
            const label = document.createElement('label')
            label.setAttribute('for', 'txt_name')
            form.insertBefore(label, button)
            txtName.labels[1].innerHTML = 'please enter name: '
            txtName.labels[1].setAttribute(
                "style", "font-size: 9px; color: red")
        }
    } else if (txtName.labels.length > 1) {
        form.removeChild(txtName.labels[1])
    }
}

function setValue() {
    const label = document.getElementById('label')
    const textbox = label.control
    textbox.value = '123456'
}