var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="soupsieve.data";var REMOTE_PACKAGE_BASE="soupsieve.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","soupsieve-1.9.5-py3.7.egg-info",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","soupsieve",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:65673,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,926,1739,3014,4506,5563,7021,7937,9072,10037,10952,11818,12988,14226,15469,16738,17902,19280,20391,21447,22398,23442,24595,25607,26116,27097,28091,29142,29929,30867,31562,32543,33629,34762,35644,36629,37891,38890,40086,41394,42280,43163,44180,45286,45856,46993,48188,49357,50380,51198,52035,52874,53710,54615,55681,56672,57773,58710,59709,60751,61967,62611,63587,64747],sizes:[926,813,1275,1492,1057,1458,916,1135,965,915,866,1170,1238,1243,1269,1164,1378,1111,1056,951,1044,1153,1012,509,981,994,1051,787,938,695,981,1086,1133,882,985,1262,999,1196,1308,886,883,1017,1106,570,1137,1195,1169,1023,818,837,839,836,905,1066,991,1101,937,999,1042,1216,644,976,1160,926],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_soupsieve.data")}Module["addRunDependency"]("datafile_soupsieve.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/soupsieve-1.9.5-py3.7.egg-info/SOURCES.txt",start:0,end:3805,audio:0},{filename:"/lib/python3.7/site-packages/soupsieve-1.9.5-py3.7.egg-info/top_level.txt",start:3805,end:3815,audio:0},{filename:"/lib/python3.7/site-packages/soupsieve-1.9.5-py3.7.egg-info/dependency_links.txt",start:3815,end:3816,audio:0},{filename:"/lib/python3.7/site-packages/soupsieve-1.9.5-py3.7.egg-info/requires.txt",start:3816,end:3871,audio:0},{filename:"/lib/python3.7/site-packages/soupsieve-1.9.5-py3.7.egg-info/PKG-INFO",start:3871,end:10032,audio:0},{filename:"/lib/python3.7/site-packages/soupsieve/__init__.py",start:10032,end:14162,audio:0},{filename:"/lib/python3.7/site-packages/soupsieve/css_types.py",start:14162,end:22820,audio:0},{filename:"/lib/python3.7/site-packages/soupsieve/util.py",start:22820,end:27223,audio:0},{filename:"/lib/python3.7/site-packages/soupsieve/css_parser.py",start:27223,end:70714,audio:0},{filename:"/lib/python3.7/site-packages/soupsieve/__meta__.py",start:70714,end:77335,audio:0},{filename:"/lib/python3.7/site-packages/soupsieve/css_match.py",start:77335,end:130750,audio:0}],remote_package_size:69769,package_uuid:"bb3ea2f3-d8bb-4690-afa6-560921d2c2f9"})})();