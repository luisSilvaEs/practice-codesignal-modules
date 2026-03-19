import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

const Questions = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Questions</h1>
      <p className="text-gray-600">
        Here you can select set the AI to create the question based on modules
      </p>
      <form className="mt-6">
        <FieldGroup>
          <FieldSet>
            <FieldLegend>
              Set modules and types of questions for each module
            </FieldLegend>
            <FieldDescription>
              1. Select a module from the dropdown below. <br />
              2. Choose the type of questions you want to generate for that
              module. <br />
              3. Click "Start Questions" to include it in your question set.{" "}
              <br />
            </FieldDescription>
          </FieldSet>
        </FieldGroup>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="module">Select module</FieldLabel>
            <Select defaultValue="">
              <SelectTrigger id="module" className="w-full">
                <SelectValue placeholder="Select a module" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="module-1">Module 1</SelectItem>
                  <SelectItem value="module-2">Module 2</SelectItem>
                  <SelectItem value="module-3">Module 3</SelectItem>
                  <SelectItem value="module-4">Module 4</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default Questions;
