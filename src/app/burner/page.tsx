"use client";

import Container from "@/components/ui/container";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRightSquare } from "lucide-react";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<string[]>([]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleAddItems() {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  }

  function handleRemoveItem(index: number) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleAddItems();
    }
  }

  return (
    <Container className="min-h-screen">
      <div className="mx-auto max-w-md">
        <div>
          <Input
            type="text"
            placeholder="Grocery Shopping"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <Button className="mt-3 w-full" onClick={handleAddItems}>
            Add
          </Button>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl font-semibold">Added Items</h1>
          {items.length === 0 ? (
            <p className="mt-3 text-neutral-400">No items added yet.</p>
          ) : (
            <ul className="mt-2 rounded-2xl bg-card p-5">
              {items.map((item, index) => (
                <ul className="flex items-center justify-between ">
                  <div className="flex gap-2">
                    <ChevronRightSquare
                      className="text-violet-300"
                      strokeWidth={1.5}
                    />
                    <li className="" key={index}>
                      {item}
                    </li>
                  </div>
                  <Button
                    className="text-red-400"
                    variant="link"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Remove
                  </Button>
                </ul>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Container>
  );
}
