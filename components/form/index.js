import ButtonFormStateful from "../button-form-stateful";
import ButtonFormStateless from "../button-form-stateless";
import Input from "../input";
import UploadFile from "../upload-file";

const template = {
  "button-sf": ButtonFormStateful,
  "button-sl": ButtonFormStateless,
  input: Input,
  upload: UploadFile,
};

export default function Form(props) {
  const RenderForm = template?.[props?.type] ?? null;
  if (RenderForm) return <RenderForm {...props} />;
}
