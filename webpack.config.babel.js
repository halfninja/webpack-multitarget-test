import path from 'path';
import { DefinePlugin } from 'webpack';

const baseConfig = (name, babelPresetTargets) => ({
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new DefinePlugin({
            BUILD_TARGET: JSON.stringify(name)
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: babelPresetTargets,
                                useBuiltIns: 'usage',
                                corejs: '3',
                            }]
                        ],
                        cacheDirectory: `.babel/cache-${name}`
                    },
                }
            }
        ]
    }
});

// Baseline support - anything vaguely used, plus IE 11 all day every day
const legacyTargets = "> 0.25%, not dead, ie 11";

// Modern support
const modernTargets = {
    chrome: "61",
    firefox: "60",
};

const config = [
    {
        ...baseConfig('legacy', legacyTargets),
        output: {
            filename: 'main.js'
        }
    },
    {
        ...baseConfig('modern', modernTargets),
        output: {
            filename: 'main.modern.js'
        }
    }
];

export default config;