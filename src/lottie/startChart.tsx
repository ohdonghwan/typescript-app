import {nodeColor} from "../interfaces/SpeedBarChartInterface";


const startChart = (startY: number, colors: nodeColor) => {
    const {color} = colors;
    const r = parseInt(color.r) / 255;
    const g = parseInt(color.g) / 255;
    const b = parseInt(color.b) / 255;
    const a = parseInt(color.a) / 100;

    return {
        "v": "5.9.0", "fr": 60, "ip": 0, "op": 110, "w": 800, "h": 200, "nm": "시작", "ddd": 0, "assets": [], "layers": [{
            "ddd": 0,
            "ind": 1,
            "ty": 4,
            "nm": "모양 레이어 1",
            "sr": 1,
            "ks": {
                "o": {"a": 0, "k": 100, "ix": 11},
                "r": {"a": 0, "k": 0, "ix": 10},
                "p": {
                    "a": 1,
                    "k": [{
                        "i": {"x": 0.833, "y": 0.833},
                        "o": {"x": 0.167, "y": 0.167},
                        "t": 0,
                        "s": [-33.5, startY, 0],
                        "to": [146.167, 27.5, 0],
                        "ti": [-141.167, -29.5, 0]
                    }, {"t": 109, "s": [831.5, 86, 0]}],
                    "ix": 2,
                    "l": 2
                },
                "a": {"a": 0, "k": [-446.5, 36, 0], "ix": 1, "l": 2},
                "s": {"a": 0, "k": [100, 100, 100], "ix": 6, "l": 2}
            },
            "ao": 0,
            "shapes": [{
                "ty": "gr",
                "it": [{
                    "ty": "rc",
                    "d": 1,
                    "s": {"a": 0, "k": [37, 25], "ix": 2},
                    "p": {"a": 0, "k": [0, 0], "ix": 3},
                    "r": {"a": 0, "k": 0, "ix": 4},
                    "nm": "사각형 패스 1",
                    "mn": "ADBE Vector Shape - Rect",
                    "hd": false
                }, {
                    "ty": "st",
                    "c": {"a": 0, "k": [1, 1, 1, 1], "ix": 3},
                    "o": {"a": 0, "k": 100, "ix": 4},
                    "w": {"a": 0, "k": 0, "ix": 5},
                    "lc": 1,
                    "lj": 1,
                    "ml": 4,
                    "bm": 0,
                    "nm": "선 1",
                    "mn": "ADBE Vector Graphic - Stroke",
                    "hd": false
                }, {
                    "ty": "fl",
                    "c": {"a": 0, "k": [r, g, b, a], "ix": 4},
                    "o": {"a": 0, "k": 100, "ix": 5},
                    "r": 1,
                    "bm": 0,
                    "nm": "칠 1",
                    "mn": "ADBE Vector Graphic - Fill",
                    "hd": false
                }, {
                    "ty": "tr",
                    "p": {"a": 0, "k": [-446.5, 36], "ix": 2},
                    "a": {"a": 0, "k": [0, 0], "ix": 1},
                    "s": {"a": 0, "k": [76.389, 76.596], "ix": 3},
                    "r": {"a": 0, "k": 0, "ix": 6},
                    "o": {"a": 0, "k": 100, "ix": 7},
                    "sk": {"a": 0, "k": 0, "ix": 4},
                    "sa": {"a": 0, "k": 0, "ix": 5},
                    "nm": "변형"
                }],
                "nm": "사각형 1",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
            }],
            "ip": 0,
            "op": 110,
            "st": 0,
            "bm": 0
        }], "markers": []
    }
}

export default startChart;
