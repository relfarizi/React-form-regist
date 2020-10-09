import React from 'react';

class City extends React.Component {
    render(){
        return(
            <div>
                <div class="input-box">
                    <p>Kota</p>
                    {cityList.map((city) => {
                        return(
                            <City/>
                        )
                    })}
                        <select id="provinsi">
                            <option value="Banten">Banten</option>
                            <option value="Jawa Barat">Jawa Barat</option>
                        </select>

                </div>
            </div>
        )
    }
}

export default City;