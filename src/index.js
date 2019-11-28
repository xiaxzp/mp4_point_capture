async function test(){
  await console.log(1);
}

if(!requestScreenCapture(false)){
  toast("请求截图失败");
  exit();
}

while(1){
  const img = captureScreen();
}



