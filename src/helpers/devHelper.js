//TODO : Refactor this file

var closeCameras = document.getElementsByClassName('closeCameras')

var currentCameraIndex = 0

var editMode = false
document.addEventListener('keydown', function checkKey(e) {
    e = e || window.event;

    if (e.key == 'z') {
       PreviousCamera()
    }
    else if (e.key == 'x') {
       NextCamera()
    }else if(e.keyCode == '32')
    {
    	if(editMode)
    		ToggleCloseCameraEditMode()
    	else
    	{
    		console.log(mainCamera.getAttribute('position'))
    		console.log(mainCamera.getAttribute('rotation'))
    	}
    }else if(e.key == 'e')
    {
    	if(!editMode)
    	{
    		mainCamera.setAttribute('active', 'false')
    		EnableCamera(0)
    		editMode = true
    	}else{
    		for(var i = 0; i < closeCameras.length; i++)
    		{
    			DisbleCamera(i)
    			DisableCameraControls(i)
    		}

    		mainCamera.setAttribute('active', 'true')
    		editMode = false
    	}
    }
})

function changeActiveCamera(index)
{
	DisbleCamera(currentCameraIndex)
	EnableCamera(index)
	currentCameraIndex = index
}

function DisbleCamera(index)
{
	closeCameras[index].setAttribute('active', 'false')
}

function DisableCameraControls(index)
{
	closeCameras[index].removeAttribute('wasd-controls')
	closeCameras[index].removeAttribute('touch-look-controls')

	let vec = closeCameras[index].getAttribute('position')
	let properties = 'position="' + vec.x.toFixed(2) + ' ' + vec.y.toFixed(2) + ' ' + vec.z.toFixed(2) + '"'

	vec = closeCameras[index].getAttribute('rotation')
	properties += ' rotation="' + vec.x.toFixed(2) + ' ' + vec.y.toFixed(2) + ' ' + vec.z.toFixed(2) + '"'

	console.log(closeCameras[index].getAttribute('id'))
	console.log(properties)
	CopyToClipboard(properties)
}

function CopyToClipboard(str)
{
	const el = document.createElement('textarea');
	el.value = str;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}

function EnableCameraControls(index)
{
	let attr = document.createAttribute('wasd-controls')
	attr.value = 'fly : true; enabled : true;'
	closeCameras[index].setAttributeNode(attr)
	
	attr = document.createAttribute('touch-look-controls')
	attr.value = 'enabled : true'
	closeCameras[index].setAttributeNode(attr)
}

function EnableCamera(index)
{
	closeCameras[index].setAttribute('active', 'true')
}

function NextCamera()
{
	let _index = currentCameraIndex + 1
	if(_index >= closeCameras.length)
		_index = 0;

	changeActiveCamera(_index)
}

function PreviousCamera()
{
	let _index = currentCameraIndex - 1
	if(_index < 0)
		_index = closeCameras.length - 1

	changeActiveCamera(_index)
}


var enableControls = false
function ToggleCloseCameraEditMode()
{
	if(!enableControls)	{
		EnableCameraControls(currentCameraIndex)
		enableControls = true
	}else{
		DisableCameraControls(currentCameraIndex)
		enableControls = false
	}
}
