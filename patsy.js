var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="patsy.data";var REMOTE_PACKAGE_BASE="patsy.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","patsy-0.5.1-py3.7.egg-info",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","patsy",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:500772,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1009,2300,3812,5372,6707,7933,8973,10067,10997,11899,12771,13547,14588,15552,16437,17462,18448,19274,20505,21770,22668,23539,25353,27187,29058,30902,32747,34592,36451,38292,40068,41929,43746,45530,47343,49202,51054,52932,54765,56617,58460,60297,62121,63961,65779,67639,69484,71315,73164,75020,76853,78721,80533,82335,84220,85990,87788,89674,91510,93377,95234,97093,98966,100804,102492,104367,106172,107996,109866,111745,113594,115437,117257,119130,120979,122834,124670,126490,128268,130091,131892,133699,135464,137241,138923,140769,142586,144040,145095,146066,147428,148431,149483,150406,151503,152574,153848,155038,156375,157721,158840,160042,160903,161643,162442,163479,164855,166276,167501,168666,169817,171034,172464,173711,174882,175696,177011,178180,179143,180028,180987,182027,182894,183967,184874,185788,186613,187512,188465,189835,190910,191954,192758,194235,195488,196417,197711,198852,200133,201322,202347,203109,204458,205889,207271,208651,209590,210514,211730,212665,213610,214964,216015,217090,218145,219342,220461,221380,222420,223180,224224,225263,226378,227744,229249,230593,231811,232887,233824,235212,236651,237868,239005,240035,241417,242237,243591,244372,245520,246510,247440,248792,250033,251319,252628,253983,254950,256161,257539,258620,259620,260473,260929,262184,263488,264378,265693,266946,268011,269354,270757,271891,273348,274861,276183,277741,279334,280299,281338,282584,283879,285434,286650,288139,289315,290852,292020,293327,294551,295996,297225,298444,299678,301141,302224,303366,304975,306622,308287,310126,311952,313717,315465,317171,318768,320547,322300,324033,325673,327401,329006,330671,332535,334192,335959,337738,339293,340992,342647,344343,346006,347742,349464,351298,353102,354933,356735,358502,360168,361927,363710,365506,367313,369123,370930,372673,374339,376047,377806,379644,381479,383277,385084,386752,388486,390264,392103,393908,395738,397497,399245,400754,402243,403454,404759,405930,407109,408126,409505,410835,412272,413561,414795,415897,417011,417960,418959,420110,421435,422563,423559,424460,425384,426377,427379,428554,429771,431181,432488,433403,434746,435809,436677,437781,438897,439864,440854,441855,442777,443793,445296,446374,447856,449174,450082,451025,452049,453195,454500,455604,456791,457961,459423,460577,461646,462394,463281,464253,465168,466033,467182,468053,469125,470074,471321,472236,473694,474808,475876,477142,478616,479995,481191,482451,483920,484930,486131,487388,488635,490234,491536,492702,493800,494531,495713,496778,497916,498678,499598,500668],sizes:[1009,1291,1512,1560,1335,1226,1040,1094,930,902,872,776,1041,964,885,1025,986,826,1231,1265,898,871,1814,1834,1871,1844,1845,1845,1859,1841,1776,1861,1817,1784,1813,1859,1852,1878,1833,1852,1843,1837,1824,1840,1818,1860,1845,1831,1849,1856,1833,1868,1812,1802,1885,1770,1798,1886,1836,1867,1857,1859,1873,1838,1688,1875,1805,1824,1870,1879,1849,1843,1820,1873,1849,1855,1836,1820,1778,1823,1801,1807,1765,1777,1682,1846,1817,1454,1055,971,1362,1003,1052,923,1097,1071,1274,1190,1337,1346,1119,1202,861,740,799,1037,1376,1421,1225,1165,1151,1217,1430,1247,1171,814,1315,1169,963,885,959,1040,867,1073,907,914,825,899,953,1370,1075,1044,804,1477,1253,929,1294,1141,1281,1189,1025,762,1349,1431,1382,1380,939,924,1216,935,945,1354,1051,1075,1055,1197,1119,919,1040,760,1044,1039,1115,1366,1505,1344,1218,1076,937,1388,1439,1217,1137,1030,1382,820,1354,781,1148,990,930,1352,1241,1286,1309,1355,967,1211,1378,1081,1e3,853,456,1255,1304,890,1315,1253,1065,1343,1403,1134,1457,1513,1322,1558,1593,965,1039,1246,1295,1555,1216,1489,1176,1537,1168,1307,1224,1445,1229,1219,1234,1463,1083,1142,1609,1647,1665,1839,1826,1765,1748,1706,1597,1779,1753,1733,1640,1728,1605,1665,1864,1657,1767,1779,1555,1699,1655,1696,1663,1736,1722,1834,1804,1831,1802,1767,1666,1759,1783,1796,1807,1810,1807,1743,1666,1708,1759,1838,1835,1798,1807,1668,1734,1778,1839,1805,1830,1759,1748,1509,1489,1211,1305,1171,1179,1017,1379,1330,1437,1289,1234,1102,1114,949,999,1151,1325,1128,996,901,924,993,1002,1175,1217,1410,1307,915,1343,1063,868,1104,1116,967,990,1001,922,1016,1503,1078,1482,1318,908,943,1024,1146,1305,1104,1187,1170,1462,1154,1069,748,887,972,915,865,1149,871,1072,949,1247,915,1458,1114,1068,1266,1474,1379,1196,1260,1469,1010,1201,1257,1247,1599,1302,1166,1098,731,1182,1065,1138,762,920,1070,104],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_patsy.data")}Module["addRunDependency"]("datafile_patsy.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/patsy-0.5.1-py3.7.egg-info/SOURCES.txt",start:0,end:2254,audio:0},{filename:"/lib/python3.7/site-packages/patsy-0.5.1-py3.7.egg-info/top_level.txt",start:2254,end:2260,audio:0},{filename:"/lib/python3.7/site-packages/patsy-0.5.1-py3.7.egg-info/dependency_links.txt",start:2260,end:2261,audio:0},{filename:"/lib/python3.7/site-packages/patsy-0.5.1-py3.7.egg-info/requires.txt",start:2261,end:2276,audio:0},{filename:"/lib/python3.7/site-packages/patsy-0.5.1-py3.7.egg-info/PKG-INFO",start:2276,end:4523,audio:0},{filename:"/lib/python3.7/site-packages/patsy/missing.py",start:4523,end:16130,audio:0},{filename:"/lib/python3.7/site-packages/patsy/test_highlevel.py",start:16130,end:44896,audio:0},{filename:"/lib/python3.7/site-packages/patsy/test_splines_crs_data.py",start:44896,end:178114,audio:0},{filename:"/lib/python3.7/site-packages/patsy/design_info.py",start:178114,end:228936,audio:0},{filename:"/lib/python3.7/site-packages/patsy/__init__.py",start:228936,end:232443,audio:0},{filename:"/lib/python3.7/site-packages/patsy/test_regressions.py",start:232443,end:233298,audio:0},{filename:"/lib/python3.7/site-packages/patsy/test_build.py",start:233298,end:264390,audio:0},{filename:"/lib/python3.7/site-packages/patsy/tokens.py",start:264390,end:272600,audio:0},{filename:"/lib/python3.7/site-packages/patsy/categorical.py",start:272600,end:291676,audio:0},{filename:"/lib/python3.7/site-packages/patsy/splines.py",start:291676,end:309227,audio:0},{filename:"/lib/python3.7/site-packages/patsy/parse_formula.py",start:309227,end:318971,audio:0},{filename:"/lib/python3.7/site-packages/patsy/util.py",start:318971,end:347517,audio:0},{filename:"/lib/python3.7/site-packages/patsy/contrasts.py",start:347517,end:371747,audio:0},{filename:"/lib/python3.7/site-packages/patsy/origin.py",start:371747,end:376337,audio:0},{filename:"/lib/python3.7/site-packages/patsy/mgcv_cubic_splines.py",start:376337,end:421562,audio:0},{filename:"/lib/python3.7/site-packages/patsy/infix_parser.py",start:421562,end:431374,audio:0},{filename:"/lib/python3.7/site-packages/patsy/test_splines_bs_data.py",start:431374,end:575380,audio:0},{filename:"/lib/python3.7/site-packages/patsy/builtins.py",start:575380,end:578538,audio:0},{filename:"/lib/python3.7/site-packages/patsy/version.py",start:578538,end:579361,audio:0},{filename:"/lib/python3.7/site-packages/patsy/highlevel.py",start:579361,end:594077,audio:0},{filename:"/lib/python3.7/site-packages/patsy/eval.py",start:594077,end:626401,audio:0},{filename:"/lib/python3.7/site-packages/patsy/user_util.py",start:626401,end:635541,audio:0},{filename:"/lib/python3.7/site-packages/patsy/constraint.py",start:635541,end:655844,audio:0},{filename:"/lib/python3.7/site-packages/patsy/state.py",start:655844,end:662712,audio:0},{filename:"/lib/python3.7/site-packages/patsy/test_state.py",start:662712,end:670730,audio:0},{filename:"/lib/python3.7/site-packages/patsy/compat_ordereddict.py",start:670730,end:679900,audio:0},{filename:"/lib/python3.7/site-packages/patsy/compat.py",start:679900,end:681889,audio:0},{filename:"/lib/python3.7/site-packages/patsy/build.py",start:681889,end:724762,audio:0},{filename:"/lib/python3.7/site-packages/patsy/redundancy.py",start:724762,end:735420,audio:0},{filename:"/lib/python3.7/site-packages/patsy/desc.py",start:735420,end:757895,audio:0}],remote_package_size:504868,package_uuid:"9eb51da9-a049-4e6e-9fe9-c08af7df512c"})})();