ObjC.import('CoreServices');
ObjC.import('Security');
ObjC.import('SystemConfiguration');

var auth;
var result = $.AuthorizationCreate($.nil, $.nil, $.kAuthorizationDefaults, Ref(auth));
//var path = "/Users/user/somebinary";
var path = "<path>";

if (result === 0) {
    var temp = $.CFURLCreateFromFileSystemRepresentation($.kCFAllocatorDefault, path, path.length, false);
    var items = $.LSSharedFileListCreate($.kCFAllocatorDefault, $.kLSSharedFileListSessionLoginItems, $.nil);
    $.LSSharedFileListSetAuthorization(items, auth);

    //var cfName = $.CFStringCreateWithCString($.nil, "somebinary", $.kCFStringEncodingASCII);
    var cfName = $.CFStringCreateWithCString($.nil, "<path>", $.kCFStringEncodingASCII);

    var itemRef = $.LSSharedFileListInsertItemURL(items, $.kLSSharedFileListItemLast, cfName, $.nil, temp, $.nil, $.nil);

    var run = true;
    while (run){
      delay(4);
      run=false;
    }

$.LSSharedFileListItemRemove(items, itemRef);


console.log("LoginItem removal successful");
} else {
    console.log("LoginItem removal failed: AuthorizationCreate returned error");
}