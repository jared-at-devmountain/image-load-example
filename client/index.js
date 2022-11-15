let imageFile = document.getElementById('image-file')
let submitButton = document.getElementById('submit')

function submitFile() {
    let theFile = imageFile.files[0]

    let formData = new FormData()
    formData.append('imageFile', theFile)
    formData.append('other', "some other data")

    axios.post('/submit', formData)
    .then(res => {
        alert(res.data)
    })
}

submitButton.addEventListener('click', submitFile)