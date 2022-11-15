let imageFile = document.getElementById('image-file')
let submitButton = document.getElementById('submit')

let formData = new FormData()

function submitFile() {
    let theFile = imageFile.files[0]

    formData.append('afile', theFile)

    console.log(theFile)

    axios.post('/submit', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(res => {
        alert(res.data)
    })
}

submitButton.addEventListener('click', submitFile)