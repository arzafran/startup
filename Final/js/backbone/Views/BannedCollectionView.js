var BannedCollectionView = Backbone.View.extend({
  render: function(){
    var $ban = $('#wrapper');
    $ban.html('');
    var header = '<br><div class="input-group"><input type="text" class="form-control"'+
                 ' placeholder="Username to Ban!" id="nombreadd">'+
                 '<span class="input-group-btn">'+
                 '<button class="btn btn-info"" id="addbanned">Ban!</button>'+
                 '</span></div><br>';
    $ban.html(header);
      this.collection.each(function(Banned){
        var bannedView = new BannedView({ model: Banned });
        $ban.append(bannedView.el);
      }, this);
  }
});
