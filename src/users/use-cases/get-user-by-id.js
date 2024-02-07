import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper";

/**
 *
 * @param {String|Number} id
 * @returns {Promise<User[]>}
 */
export const getUserById = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const res = await fetch(url);
    const data = await res.json();

    // console.log(data.next);
    // const users = localhostUserToModel(data.data[0]);
    const user = localhostUserToModel(data);

    // if (page > data.pages ) {
    //     return [];
    // }

    console.log(user);

    return user;
};
