/**
 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : SITHUWA-MD
 * @author : SITHUWA <https://github.com/Sithuwa>
 * @description : SITHUWA-MD,A Multi-Device whatsapp bot.
 * @version 1.0.0
 **/

const _0x1c4bee = _0x39c7;
(function (_0x235c79, _0x5efa2c) {
  const _0x3ab569 = _0x39c7,
    _0x227ea8 = _0x235c79();
  while (!![]) {
    try {
      const _0x212691 =
        (-parseInt(_0x3ab569(0x133)) / 0x1) *
          (parseInt(_0x3ab569(0x14a)) / 0x2) +
        (-parseInt(_0x3ab569(0x13b)) / 0x3) *
          (parseInt(_0x3ab569(0x131)) / 0x4) +
        (parseInt(_0x3ab569(0x15e)) / 0x5) *
          (parseInt(_0x3ab569(0x16c)) / 0x6) +
        (-parseInt(_0x3ab569(0x166)) / 0x7) *
          (parseInt(_0x3ab569(0x16d)) / 0x8) +
        (parseInt(_0x3ab569(0x137)) / 0x9) *
          (-parseInt(_0x3ab569(0x12d)) / 0xa) +
        (-parseInt(_0x3ab569(0x12b)) / 0xb) *
          (parseInt(_0x3ab569(0x12a)) / 0xc) +
        parseInt(_0x3ab569(0x12e)) / 0xd;
      if (_0x212691 === _0x5efa2c) break;
      else _0x227ea8["push"](_0x227ea8["shift"]());
    } catch (_0x4c9dba) {
      _0x227ea8["push"](_0x227ea8["shift"]());
    }
  }
})(_0x55ce, 0x5a7aa);
const axios = require(_0x1c4bee(0x12c)),
  { sck1, tiny, fancytext, listall, cmd, ffmpeg } = require("../lib/"),
  fs = require("fs-extra"),
  { exec } = require("child_process"),
  { Sticker, createSticker, StickerTypes } = require(_0x1c4bee(0x152));
cmd(
  {
    pattern: _0x1c4bee(0x16f),
    react: _0x1c4bee(0x15c),
    desc: _0x1c4bee(0x14d),
    category: _0x1c4bee(0x162),
    use: _0x1c4bee(0x135),
    filename: __filename,
  },
  async (_0x4028c4, _0x1fa173, _0x2cc486) => {
    const _0x2567ba = _0x1c4bee,
      _0x20b922 = (_0x1e64a5) => {
        const _0x3f2f93 = _0x39c7;
        return (
          "" + Math[_0x3f2f93(0x11a)](Math["random"]() * 0x2710) + _0x1e64a5
        );
      };
    if (!_0x1fa173["quoted"])
      return _0x1fa173[_0x2567ba(0x150)]("_Reply\x20to\x20Any\x20Sticker._");
    let _0x5ba79a = _0x1fa173["quoted"][_0x2567ba(0x130)];
    if (_0x5ba79a == "imageMessage" || _0x5ba79a == _0x2567ba(0x169)) {
      let _0x3c8307 = await _0x4028c4[_0x2567ba(0x11e)](_0x1fa173["quoted"]),
        _0x124883 = await _0x20b922(".png");
      exec(_0x2567ba(0x138) + _0x3c8307 + "\x20" + _0x124883, (_0x2052b5) => {
        const _0x12ab41 = _0x2567ba;
        let _0x3d0d5e = fs[_0x12ab41(0x129)](_0x3c8307);
        _0x4028c4[_0x12ab41(0x15d)](
          _0x1fa173[_0x12ab41(0x14c)],
          { image: _0x3d0d5e },
          { quoted: _0x1fa173 },
        ),
          fs[_0x12ab41(0x11d)](_0x3c8307, (_0xf7ecc0) => {
            const _0x151fd5 = _0x12ab41;
            if (_0xf7ecc0)
              return console[_0x151fd5(0x165)](
                _0x151fd5(0x156),
                _0x3c8307,
                _0x151fd5(0x160),
                _0xf7ecc0,
              );
            else return console["log"](_0x151fd5(0x12f), _0x3c8307);
          });
      });
    } else return _0x1fa173[_0x2567ba(0x150)](_0x2567ba(0x124));
  },
),
  cmd(
    {
      pattern: "vv",
      react: "🎄",
      alias: [_0x1c4bee(0x13f), _0x1c4bee(0x148)],
      desc: _0x1c4bee(0x119),
      category: _0x1c4bee(0x127),
      use: _0x1c4bee(0x163),
      filename: __filename,
    },
    async (_0x37d994, _0x3fe923, _0x5487da) => {
      const _0x3f8bd9 = _0x1c4bee;
      try {
        const _0x51bbd1 =
          _0x3fe923["msg"][_0x3f8bd9(0x139)][_0x3f8bd9(0x125)][
            _0x3f8bd9(0x15a)
          ];
        if (_0x51bbd1) {
          if (_0x51bbd1[_0x3f8bd9(0x123)][_0x3f8bd9(0x14f)]) {
            console["log"](_0x3f8bd9(0x14b));
            let _0x538a95 =
                _0x51bbd1[_0x3f8bd9(0x123)][_0x3f8bd9(0x14f)]["caption"],
              _0x319090 = await _0x37d994[_0x3f8bd9(0x11e)](
                _0x51bbd1["message"][_0x3f8bd9(0x14f)],
              );
            return _0x37d994[_0x3f8bd9(0x15d)](_0x3fe923[_0x3f8bd9(0x14c)], {
              image: { url: _0x319090 },
              caption: _0x538a95,
            });
          }
          if (_0x51bbd1["message"][_0x3f8bd9(0x11f)]) {
            let _0x3dd891 =
                _0x51bbd1[_0x3f8bd9(0x123)]["videoMessage"][_0x3f8bd9(0x153)],
              _0x854729 = await _0x37d994[_0x3f8bd9(0x11e)](
                _0x51bbd1[_0x3f8bd9(0x123)]["videoMessage"],
              );
            return _0x37d994["sendMessage"](_0x3fe923[_0x3f8bd9(0x14c)], {
              video: { url: _0x854729 },
              caption: _0x3dd891,
            });
          }
        }
      } catch (_0x5f4005) {
        console[_0x3f8bd9(0x132)](_0x3f8bd9(0x165), _0x5f4005);
      }
      if (!_0x3fe923[_0x3f8bd9(0x121)])
        return _0x3fe923[_0x3f8bd9(0x150)](_0x3f8bd9(0x144));
      if (_0x3fe923[_0x3f8bd9(0x121)]["mtype"] === _0x3f8bd9(0x143)) {
        console[_0x3f8bd9(0x132)](_0x3f8bd9(0x154));
        if (_0x3fe923[_0x3f8bd9(0x121)]["message"][_0x3f8bd9(0x14f)]) {
          let _0x1fbd49 =
              _0x3fe923[_0x3f8bd9(0x121)][_0x3f8bd9(0x123)][_0x3f8bd9(0x14f)][
                _0x3f8bd9(0x153)
              ],
            _0x8862e7 = await _0x37d994[_0x3f8bd9(0x11e)](
              _0x3fe923["quoted"][_0x3f8bd9(0x123)]["imageMessage"],
            );
          _0x37d994[_0x3f8bd9(0x15d)](_0x3fe923[_0x3f8bd9(0x14c)], {
            image: { url: _0x8862e7 },
            caption: _0x1fbd49,
          });
        } else {
          if (_0x3fe923[_0x3f8bd9(0x121)][_0x3f8bd9(0x123)]["videoMessage"]) {
            let _0x474543 =
                _0x3fe923["quoted"][_0x3f8bd9(0x123)][_0x3f8bd9(0x11f)][
                  _0x3f8bd9(0x153)
                ],
              _0x900da6 = await _0x37d994["downloadAndSaveMediaMessage"](
                _0x3fe923[_0x3f8bd9(0x121)][_0x3f8bd9(0x123)]["videoMessage"],
              );
            _0x37d994["sendMessage"](_0x3fe923[_0x3f8bd9(0x14c)], {
              video: { url: _0x900da6 },
              caption: _0x474543,
            });
          }
        }
      } else
        return _0x3fe923[_0x3f8bd9(0x150)](
          "```This\x20is\x20Not\x20A\x20ViewOnce\x20Message```",
        );
    },
  ),
  cmd(
    {
      pattern: _0x1c4bee(0x172),
      desc: _0x1c4bee(0x128),
      category: _0x1c4bee(0x162),
      use: _0x1c4bee(0x126),
      react: "✅",
      filename: __filename,
    },
    async (_0x558e56, _0xe60139, _0x4a309f) => {
      const _0x389a65 = _0x1c4bee;
      if (isNaN(_0x4a309f[_0x389a65(0x141)]("\x20")[0x0]) || !_0x4a309f) {
        let _0x3112d7 = tiny(
          "Fancy\x20text\x20generator\x0a\x0aExample:\x20.fancy\x2032\x20Secktor\x0a\x0a",
        );
        return (
          listall("VISHWA\x20Bot")["forEach"]((_0x2084c8, _0x5048bf) => {
            _0x3112d7 += (_0x5048bf += 0x1) + "\x20" + _0x2084c8 + "\x0a";
          }),
          await _0xe60139["reply"](_0x3112d7)
        );
      }
      let _0x4cffb5 = await fancytext(
        "" + _0x4a309f["slice"](0x2),
        _0x4a309f[_0x389a65(0x141)]("\x20")[0x0],
      );
      _0xe60139[_0x389a65(0x150)](_0x4cffb5);
    },
  ),
  cmd(
    {
      pattern: _0x1c4bee(0x159),
      desc: _0x1c4bee(0x11c),
      category: _0x1c4bee(0x162),
      use: _0x1c4bee(0x134),
      react: "✅",
      filename: __filename,
    },
    async (_0x30cbb4, _0x52f275, _0x28d4e6) => {
      const _0x6933a7 = _0x1c4bee;
      if (!_0x28d4e6)
        return _0x52f275[_0x6933a7(0x150)]("Provide\x20me\x20a\x20link");
      try {
        (link = _0x28d4e6[_0x6933a7(0x141)]("\x20")[0x0]),
          (anu = await axios[_0x6933a7(0x158)](_0x6933a7(0x15b) + link)),
          _0x52f275["reply"](
            "*🛡️Your\x20Shortened\x20URL*\x0a\x0a" + anu["data"],
          );
      } catch (_0x4a03c7) {
        console[_0x6933a7(0x132)](_0x4a03c7);
      }
    },
  ),
  cmd(
    {
      pattern: _0x1c4bee(0x16e),
      alias: [_0x1c4bee(0x11b), _0x1c4bee(0x118), "cs"],
      desc: _0x1c4bee(0x142),
      category: "sticker",
      filename: __filename,
      use: _0x1c4bee(0x167),
    },
    async (_0x2f37c0, _0x2ba651, _0x4ed047) => {
      const _0x4b8042 = _0x1c4bee;
      if (!_0x2ba651[_0x4b8042(0x121)])
        return _0x2ba651[_0x4b8042(0x150)](_0x4b8042(0x16a));
      let _0x5e7f30 = _0x2ba651["quoted"]["mtype"];
      (pack = Config["packname"]), (author = Config[_0x4b8042(0x13e)]);
      if (_0x5e7f30 == _0x4b8042(0x14f) || _0x5e7f30 == _0x4b8042(0x169)) {
        let _0x38d6e4 = await _0x2ba651[_0x4b8042(0x121)][_0x4b8042(0x145)](),
          _0x47245c = new Sticker(_0x38d6e4, {
            pack: pack,
            author: author,
            type: StickerTypes["CIRCLE"],
            categories: ["🤩", "🎉"],
            id: "12345",
            quality: 0x4b,
          });
        const _0x2e26a0 = await _0x47245c["toBuffer"]();
        return _0x2f37c0[_0x4b8042(0x15d)](
          _0x2ba651["chat"],
          { sticker: _0x2e26a0 },
          { quoted: _0x2ba651 },
        );
      } else return _0x2ba651[_0x4b8042(0x150)](_0x4b8042(0x164));
    },
  ),
  cmd(
    {
      pattern: "crop",
      alias: [_0x1c4bee(0x171), "csticker", _0x1c4bee(0x149)],
      desc: "Makes\x20sticker\x20of\x20replied\x20image/video.",
      category: _0x1c4bee(0x14e),
      filename: __filename,
      use: _0x1c4bee(0x167),
    },
    async (_0x512f82, _0x40e23a, _0x6d863) => {
      const _0x162e99 = _0x1c4bee;
      if (!_0x40e23a["quoted"])
        return _0x40e23a[_0x162e99(0x150)](_0x162e99(0x16a));
      let _0x5cb90e = _0x40e23a[_0x162e99(0x121)][_0x162e99(0x130)];
      (pack = Config["packname"]), (author = Config[_0x162e99(0x13e)]);
      if (_0x5cb90e == _0x162e99(0x14f) || _0x5cb90e == _0x162e99(0x169)) {
        let _0x524de8 = await _0x40e23a["quoted"][_0x162e99(0x145)](),
          _0xbe7dba = new Sticker(_0x524de8, {
            pack: pack,
            author: author,
            type: StickerTypes[_0x162e99(0x120)],
            categories: ["🤩", "🎉"],
            id: _0x162e99(0x146),
            quality: 0x4b,
          });
        const _0x4be077 = await _0xbe7dba[_0x162e99(0x155)]();
        return _0x512f82[_0x162e99(0x15d)](
          _0x40e23a[_0x162e99(0x14c)],
          { sticker: _0x4be077 },
          { quoted: _0x40e23a },
        );
      } else
        return _0x40e23a[_0x162e99(0x150)](
          "*Uhh,Please\x20reply\x20to\x20any\x20image*",
        );
    },
  ),
  cmd(
    {
      pattern: _0x1c4bee(0x161),
      alias: [_0x1c4bee(0x13a), _0x1c4bee(0x151)],
      desc: _0x1c4bee(0x142),
      category: _0x1c4bee(0x14e),
      filename: __filename,
      use: _0x1c4bee(0x167),
    },
    async (_0x16a80d, _0x551c68, _0x27e316) => {
      const _0x1c5181 = _0x1c4bee;
      if (!_0x551c68[_0x1c5181(0x121)])
        return _0x551c68[_0x1c5181(0x150)](_0x1c5181(0x16a));
      let _0x5d1b6b = _0x551c68[_0x1c5181(0x121)][_0x1c5181(0x130)];
      (pack = Config[_0x1c5181(0x122)]), (author = Config[_0x1c5181(0x13e)]);
      if (_0x5d1b6b == _0x1c5181(0x14f) || _0x5d1b6b == _0x1c5181(0x169)) {
        let _0x47f5ef = await _0x551c68[_0x1c5181(0x121)]["download"](),
          _0x4125d = new Sticker(_0x47f5ef, {
            pack: pack,
            author: author,
            type: StickerTypes[_0x1c5181(0x140)],
            categories: ["🤩", "🎉"],
            id: _0x1c5181(0x146),
            quality: 0x4b,
          });
        const _0x430c44 = await _0x4125d[_0x1c5181(0x155)]();
        return _0x16a80d[_0x1c5181(0x15d)](
          _0x551c68["chat"],
          { sticker: _0x430c44 },
          { quoted: _0x551c68 },
        );
      } else return _0x551c68[_0x1c5181(0x150)](_0x1c5181(0x164));
    },
  ),
  cmd(
    {
      pattern: _0x1c4bee(0x16b),
      react: "🪗",
      alias: [_0x1c4bee(0x136), _0x1c4bee(0x170)],
      desc: _0x1c4bee(0x157),
      category: _0x1c4bee(0x162),
      use: "<reply\x20to\x20any\x20Video>",
      filename: __filename,
    },
    async (_0xe41331, _0x1c7a7d, _0x5e98ad) => {
      const _0x251220 = _0x1c4bee;
      if (!_0x1c7a7d["quoted"])
        return _0x1c7a7d[_0x251220(0x150)](_0x251220(0x15f));
      let _0x244c78 = _0x1c7a7d[_0x251220(0x121)][_0x251220(0x130)];
      if (_0x244c78 == _0x251220(0x13c) || _0x244c78 == _0x251220(0x11f)) {
        let _0x37aebe = await _0xe41331[_0x251220(0x11e)](
          _0x1c7a7d[_0x251220(0x121)],
        );
        const { toAudio: _0x5ea327 } = require(_0x251220(0x13d));
        let _0x5029d9 = fs[_0x251220(0x129)](_0x37aebe),
          _0x4b1f18 = await _0x5ea327(_0x5029d9);
        _0xe41331["sendMessage"](
          _0x1c7a7d["chat"],
          { audio: _0x4b1f18, mimetype: "audio/mpeg" },
          { quoted: _0x1c7a7d },
        ),
          fs[_0x251220(0x11d)](_0x37aebe, (_0x222f23) => {
            const _0x1efd92 = _0x251220;
            if (_0x222f23)
              return console[_0x1efd92(0x165)](
                _0x1efd92(0x168),
                _0x37aebe,
                _0x1efd92(0x160),
                _0x222f23,
              );
            else
              return console[_0x1efd92(0x132)](
                "File\x20deleted\x20successfully\x20in\x20TOAUDIO\x20MP3\x20at\x20:\x20",
                _0x37aebe,
              );
          });
      } else return _0x1c7a7d[_0x251220(0x150)](_0x251220(0x147));
    },
  );
function _0x39c7(_0x5cfce0, _0x16f01d) {
  const _0x55cee2 = _0x55ce();
  return (
    (_0x39c7 = function (_0x39c704, _0x5ec564) {
      _0x39c704 = _0x39c704 - 0x118;
      let _0x8ba11e = _0x55cee2[_0x39c704];
      return _0x8ba11e;
    }),
    _0x39c7(_0x5cfce0, _0x16f01d)
  );
}
function _0x55ce() {
  const _0x590e31 = [
    "cropsticker",
    "8RjnvmR",
    "Quot\x20Entered",
    "chat",
    "Makes\x20photo\x20of\x20replied\x20sticker.",
    "sticker",
    "imageMessage",
    "reply",
    "roundsticker",
    "wa-sticker-formatter",
    "caption",
    "ViewOnce\x20Entered",
    "toBuffer",
    "File\x20Not\x20Deleted\x20from\x20From\x20TOPHOTO\x20AT\x20:\x20",
    "changes\x20type\x20to\x20audio.",
    "get",
    "tiny",
    "viewOnceMessageV2",
    "https://tinyurl.com/api-create.php?url=",
    "🏜️",
    "sendMessage",
    "2215EpqPBJ",
    "_Reply\x20to\x20Any\x20Video_",
    "\x0a\x20while\x20Error\x20:\x20",
    "round",
    "converter",
    "<query>",
    "*Uhh,Please\x20reply\x20to\x20any\x20image*",
    "error",
    "3653503JocJqj",
    "<reply\x20to\x20any\x20image/video.>",
    "File\x20Not\x20Deleted\x20from\x20From\x20TOAUDIO\x20AT\x20:\x20",
    "stickerMessage",
    "*Reply\x20To\x20any\x20Image\x20or\x20video\x20Sir.*",
    "toaudio",
    "5826trLJbR",
    "8KmeVwt",
    "circle",
    "photo",
    "tomp3",
    "cropstic",
    "fancy",
    "circlesticker",
    "Flips\x20given\x20text.",
    "floor",
    "circlestic",
    "Makes\x20url\x20tiny.",
    "unlink",
    "downloadAndSaveMediaMessage",
    "videoMessage",
    "CROPPED",
    "quoted",
    "packname",
    "message",
    "```Uhh\x20Please,\x20Reply\x20To\x20A\x20Non\x20Animated\x20Sticker```",
    "quotedMessage",
    "56\x20Secktor",
    "misc",
    "Makes\x20stylish/fancy\x20given\x20text",
    "readFileSync",
    "32388hJkhcm",
    "594AlkBGf",
    "axios",
    "36870erHoza",
    "23770708gYOSCl",
    "File\x20deleted\x20successfully\x20in\x20TOPHOTO\x20\x20at\x20:\x20",
    "mtype",
    "2852MxBodn",
    "log",
    "45574oZjVvb",
    "<url>",
    "<reply\x20to\x20any\x20gif>",
    "mp3",
    "1260miHJmu",
    "ffmpeg\x20-i\x20",
    "contextInfo",
    "roundstic",
    "2196YbyTeV",
    "audioMessage",
    "../lib",
    "author",
    "viewonce",
    "ROUNDED",
    "split",
    "Makes\x20sticker\x20of\x20replied\x20image/video.",
    "viewOnceMessage",
    "```Uh\x20Please\x20Reply\x20A\x20ViewOnce\x20Message```",
    "download",
    "12345",
    "```Uhh\x20Please,\x20Reply\x20To\x20A\x20video\x20Message```",
    "retrive",
  ];
  _0x55ce = function () {
    return _0x590e31;
  };
  return _0x55ce();
}
