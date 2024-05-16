// ---------------------Edit------------------

function EditInfo() {
    document.querySelector('#edit-avatar').classList.remove('hidden');
    document.querySelector('#edit-info').classList.remove('hidden');
    document.querySelectorAll('.edit-ac').forEach(function(element) {
        element.classList.remove('hidden');
    });    
    document.querySelector('#edit-avatar').classList.remove('hidden');
    document.querySelector('#edit-bio').classList.remove('hidden');

    document.querySelector('#div-edit').classList.add('hidden');
    document.querySelector('#div-save').classList.remove('hidden');
}

function Remove_ac(value) {
    if(value == 1) {
        document.querySelector('#a-fb').classList.add('hidden');
    } else if(value == 2) {
        document.querySelector('#a-lin').classList.add('hidden');
    } else {
        document.querySelector('#a-twi').classList.add('hidden');
    }
}

function Edit_Info_Agent() {
    var name_agent = document.getElementById('name-agent');
    var profession = document.getElementById('profession');
    var experience = document.getElementById('info-experience');
    var company = document.getElementById('info-company');
    var address = document.getElementById('info-address');
    var phone = document.getElementById('info-phone');
    var email = document.getElementById('info-email');

    name_agent.contentEditable = true;
    profession.contentEditable = true;
    experience.contentEditable = true;
    company.contentEditable = true;
    address.contentEditable = true;
    phone.contentEditable = true;
    email.contentEditable = true;
}

function Edit_Para() {
    var para_bio = document.getElementById('para-bio');
    para_bio.contentEditable = true;
}

function previewImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById('img-avatar').src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}
