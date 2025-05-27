/**
 * @typedef {Object} Option
 * @property {string} label - Display text for the option
 * @property {string} value - Unique identifier
 * @property {string[]} keywords - Keywords for matching user input
 * @property {Option[]} [subOptions] - Nested options for hierarchical navigation
 * @property {React.ReactNode} [info] - Information to display when selected
 */

/**
 * @typedef {Object} Message
 * @property {"bot" | "user"} type - Message sender type
 * @property {string | React.ReactNode} content - Message content
 * @property {Option[]} [options] - Available options for the user to select
 */

/**
 * @typedef {Object} TypingIndicator
 * @property {boolean} isTyping - Whether the bot is currently typing
 * @property {string} message - Partial message being typed
 */

export {}; // This is just to make the file a module 