export const api = {
    baseUrl: '/api/',
    post(url, data) {
        const accessToken = uni.getStorageSync('access_token');
        return new Promise((resolve,reject) => {
                uni.request({
                    method: 'POST',
                    url: this.baseUrl + url,
                    data: data,
                    dataType: 'JSON',
                    header: {
                        'access_token': accessToken,
                    },
                }).then(data => {
                    let [err, res] = data
                    console.log(res);
                    if (res.data.message === 'SUCCESS') {
                        uni.setStorageSync("access_token",res.data.data.token);
                        resolve(res.data)
                    } else {
                        uni.showToast({
                            title: res.data.message,
                            icon: "none",
                        })
                        reject(res.data)
                    }
                })
            }
        )
    }
}
