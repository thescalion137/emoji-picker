import "./styles.css";
import EmojiPicker, {
  EmojiStyle,
  SkinTones,
  Theme,
  Categories,
  EmojiClickData,
  Emoji,
  SuggestionMode,
  SkinTonePickerLocation
} from "emoji-picker-react";
import { useState } from "react";
import * as React from "react";

export default function App() {
  const [selectedEmoji, setSelectedEmoji] = useState<string>("1f60a");
  const [inputValue, setInputValue] = useState<string>("");

  function onClick(emojiData: EmojiClickData, event: MouseEvent) {
    setInputValue(
      (inputValue) =>
        inputValue + (emojiData.isCustom ? emojiData.unified : emojiData.emoji)
    );
    setSelectedEmoji(emojiData.unified);
  }

  return (
    <div className="App">
      <h2>Emoji Picker React 4.5 Demo</h2>
      <div className="show-emoji">
        <h3>Your selected Emoji is:</h3>
        {selectedEmoji ? <Emoji unified={selectedEmoji} size={77} /> : null}
      </div>
      <div>
        <input
          className="text-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Select Emojis..."
        />
      </div>
      <EmojiPicker
        onEmojiClick={onClick}
        autoFocusSearch={false}
        emojiStyle={EmojiStyle.NATIVE}
        // theme={Theme.AUTO}
        // searchDisabled
        // skinTonePickerLocation={SkinTonePickerLocation.PREVIEW}
        // height={350}
        // width="50%"
        // emojiVersion="0.6"
        // lazyLoadEmojis={true}
        previewConfig={{
          defaultCaption: "Pick one!",
          defaultEmoji: "1f92a" // 🤪
        }}
        // suggestedEmojisMode={SuggestionMode.RECENT}
        // skinTonesDisabled
        // searchPlaceHolder="Filter"
        // defaultSkinTone={SkinTones.MEDIUM}
        // emojiStyle={EmojiStyle.NATIVE}
        // categories={[
        //   {
        //     name: "Fun and Games",
        //     category: Categories.ACTIVITIES
        //   },
        //   {
        //     name: "Smiles & Emotions",
        //     category: Categories.SMILEYS_PEOPLE
        //   },
        //   {
        //     name: "Flags",
        //     category: Categories.FLAGS
        //   },
        //   {
        //     name: "Yum Yum",
        //     category: Categories.FOOD_DRINK
        //   }
        // ]}
        customEmojis={[
          {
            names: ["Alice", "alice in wonderland"],
            imgUrl:
              "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/alice.png",
            id: "alice"
          },
          {
            names: ["Dog"],
            imgUrl:
              "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/dog.png",
            id: "dog"
          },
          {
            names: ["Hat"],
            imgUrl:
              "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/hat.png",
            id: "hat"
          },
          {
            names: ["Kid"],
            imgUrl:
              "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/kid.png",
            id: "kid"
          },
          {
            names: ["Mic"],
            imgUrl:
              "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/mic.png",
            id: "mic"
          },
          {
            names: ["Moab", "desert"],
            imgUrl:
              "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/moab.png",
            id: "moab"
          },
          {
            names: ["Potter", "harry", "harry potter"],
            imgUrl:
              "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/potter.png",
            id: "potter"
          },
          {
            names: ["Shroom", "mushroom"],
            imgUrl:
              "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/shroom.png",
            id: "shroom"
          },
          {
            names: ["Smily"],
            imgUrl:
              "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/smily.png",
            id: "smily"
          },
          {
            names: ["Tabby", "cat"],
            imgUrl:
              "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/tabby.png",
            id: "tabby"
          },
          {
            names: ["Vest"],
            imgUrl:
              "https://cdn.jsdelivr.net/gh/ealush/emoji-picker-react@custom_emojis_assets/vest.png",
            id: "vest"
          }
        ]}
      />
    </div>
  );
}
