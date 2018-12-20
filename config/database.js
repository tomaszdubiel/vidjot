if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI:
    'mongodb://tomdub:tomdub1@ds011452.mlab.com:11452/tomdub_test'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}