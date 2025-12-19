import "./../Styles/Forms.css";
import {useForm} from "react-hook-form";
const ManageRoom = () => {
  const{
    register,
    handleSubmit,
    formState:{errors},
  } = useForm();
  const onSubmitHandler=(fdata)=>{
    console.log(fdata);
    alert("Room added succesfully");
  }
  return (
    <div className="forms">
      <h1>Manage Room Form</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label>Room id:</label>
        <input
          {...register("id", {
            required: "Id is required please enter",
            maxLength: { value: 5, message: "Max length is 5" },
          })}
          type="text"
        />
        {errors.id && <p>{errors.id.message}</p>}
        <label>Room name:</label>
        <input {...register("name")} type="text" />
        <label>Room Type:</label>
        <input {...register("type")} type="text" />
        <label>Price:</label>
        <input {...register("price")} type="Number" />
        <label>Capacity:</label>
        <input {...register("capacity")} type="Number" />
        <label>Room Description:</label>
        <textarea
          {...register("description")}
          cols={10}
          rows={8}
          name="description"
          id="description"
        ></textarea>
        <label for="amenities">Amenities:</label>
        <label>
          <input {...register("amenities")} type="checkbox" value="Wifi" /> Wifi
        </label>
        <label className="a">
          <input
            {...register("amenities")}
            type="checkbox"
            value="Room Service"
          />{" "}
          Room Service
        </label>
        <label className="a">
          <input
            {...register("amenities")}
            type="checkbox"
            value="Room Heater"
          />{" "}
          Room Heater
        </label>
        <label className="a">
          <input
            {...register("amenities")}
            type="checkbox"
            value="Kitchenette"
          />{" "}
          Kitchenette
        </label>
        <label className="a">
          <input {...register("amenities")} type="checkbox" value="Smart TV" />{" "}
          Smart TV
        </label>
        <label className="a">
          <input
            {...register("amenities")}
            type="checkbox"
            value="Air Conditioning"
          />{" "}
          Air Conditioning
        </label>
        <label className="a">
          <input {...register("amenities")} type="checkbox" value="TV" /> TV
        </label>
        <label>Room Images (URLs):</label>

        <input
          {...register("images")}
          type="text"
          placeholder="Enter image URL"
        />

        <input
          {...register("images")}
          type="text"
          placeholder="Enter image URL"
        />

        <input
          {...register("images")}
          type="text"
          placeholder="Enter image URL"
        />

        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};

export default ManageRoom;
