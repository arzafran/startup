define(['jquery'], function ($) {
  $(document).ready(function (){
    var idbSupported;
    var db;
    var $data = $('#dataHolder');
    if("indexedDB" in window) {
    idbSupported = true;
    }
    if(idbSupported) {
      var request = indexedDB.open("testDb.txt",1);
      request.onupgradeneeded = function(e) {
        var thisDB = e.target.result;
        if(!thisDB.objectStoreNames.contains("data")) {
          thisDB.createObjectStore("data", {autoIncrement:true});
        }
      }
    request.onsuccess = function(e) {
      db = e.target.result;
      var $dropDaBase = $('#dropDaBase');
      $('#save').on('click',function(){
        var txt = $dropDaBase.val();
        $dropDaBase.val('');
        var data = { data:txt }
        var transaction = db.transaction(["data"],"readwrite");
        var storage = transaction.objectStore("data");
        var request = storage.add(data);
      });

      $('#get').on('click',function(){
        var transaction = db.transaction(["data"], "readonly");
        var objectStore = transaction.objectStore("data");
        var cursor = objectStore.openCursor();
        $data.html("");
        cursor.onsuccess = function(e) {
          var res = e.target.result;
            if(res) {
              var obj = "<em>Data</em> : " + res.value['data'] + '<br>';
              $data.append('<p>'+obj+'</p>');
              res.continue();
            }
        }
      });

      $('#delete').on('click',function(){
        var transaction = db.transaction(["data"], "readwrite");
        var objectStore = transaction.objectStore("data");
        var cursor = objectStore.openCursor();
        $data.html("");
        cursor.onsuccess = function(e) {
          var res = e.target.result;
          if(res) {
            objectStore.delete(res.key);
            res.continue();
          }
        }
      });
    }
    request.onerror = function(e) {
      console.log("Error");
      console.dir(e);
    }
  }else{
    //complete later 
    localStorage.setItem('data', db)
  }
  });
});