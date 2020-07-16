Scene_Title.prototype.createBackground = function() {
    this._animFrameImgs=[
        ImageManager.loadBitmap("img/mytilte/", "title01"),
        ImageManager.loadBitmap("img/mytilte/", "title02"),
        ImageManager.loadBitmap("img/mytilte/", "title03"),
        ImageManager.loadBitmap("img/mytilte/", "title04"),
        ImageManager.loadBitmap("img/mytilte/", "title05"),
        ImageManager.loadBitmap("img/mytilte/", "title06"),
        ImageManager.loadBitmap("img/mytilte/", "title07"),
        ImageManager.loadBitmap("img/mytilte/", "title08"),
        ImageManager.loadBitmap("img/mytilte/", "title09"),
        ImageManager.loadBitmap("img/mytilte/", "title10"),
        ImageManager.loadBitmap("img/mytilte/", "title11"),
        ImageManager.loadBitmap("img/mytilte/", "title12"),
        ImageManager.loadBitmap("img/mytilte/", "title13"),
        ImageManager.loadBitmap("img/mytilte/", "title14"),
        ImageManager.loadBitmap("img/mytilte/", "title15"),
        ImageManager.loadBitmap("img/mytilte/", "title16"),
        ImageManager.loadBitmap("img/mytilte/", "title17"),
        ImageManager.loadBitmap("img/mytilte/", "title18"),
        ImageManager.loadBitmap("img/mytilte/", "title19"),
        ImageManager.loadBitmap("img/mytilte/", "title20"),
        ImageManager.loadBitmap("img/mytilte/", "title21"),
        ImageManager.loadBitmap("img/mytilte/", "title22"),
        ImageManager.loadBitmap("img/mytilte/", "title23"),
        ImageManager.loadBitmap("img/mytilte/", "title24")
    ];
    this._animFrames=[0,1,2,1];
    this._currFrame=0;
    this._animDelay=0.2;
    this._backSprite = new Sprite(this._animFrameImgs[0]);
    this.centerSprite(this._backSprite)
    this.addChild(this._backSprite);
};
Scene_Title.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    SceneManager.clearStack();
    //this.centerSprite(this._backSprite1);//删除
    //this.centerSprite(this._backSprite2);//删除
    this.playTitleMusic();
    this.startFadeIn(this.fadeSpeed(), false);
};

var _Scene_Title_update = Scene_Title.prototype.update;
Scene_Title.prototype.update = function() {
    _Scene_Title_update.call(this);

    this._elapsedSinceLastUpdate = this._elapsedSinceLastUpdate || 0;
    if (this._elapsedSinceLastUpdate >= this._animDelay) {
        this._currFrame++;
        this._currFrame = this._currFrame % this._animFrames.length;
        var animFrameIndex = this._animFrames[this._currFrame];
        this._backSprite.bitmap = this._animFrameImgs[animFrameIndex];
        this._elapsedSinceLastUpdate = 0;
    }
    this._elapsedSinceLastUpdate += 1 / Graphics._fpsMeter.fps;
};