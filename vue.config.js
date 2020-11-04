module.exports = {
    //путь в продакшн и в дев
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    //путь к папкам стилей, скриптов, картинок
    assetsDir: '',
    //не компилировать map файлы
    productionSourceMap: false,
    //отключает хеши у файлов (нужны чтоб пользователь не чистил кеш)
    filenameHashing: true
}