import { blocks } from './blocks';

interface BlockWithState {
    chars: [string, string];
    used: boolean;
}

// Each position has a list of blocks which are possible in this position.
type Position = BlockWithState[];

function tryMakeWord(word: string, positions: Position[], index: number) {
    // All chars matching
    if (index >= word.length) return true;

    // Only look at the blocks which are possible and have not been used yet
    const possibleBlocks = positions[index].filter((blockState) => !blockState.used);
    for (const blockState of possibleBlocks) {
        // Try to use this block
        blockState.used = true;
        if (tryMakeWord(word, positions, index + 1)) return true;

        // Didn't work, so mark it as unused
        blockState.used = false;
    }

    return false;
}

export function canMakeWord(word: string) {
    word = word.toUpperCase();

    // Only blocks which are contained in the word are considered
    const possibleBlocks = blocks.filter(
        (block) => word.includes(block[0]) || word.includes(block[1]),
    );

    // Not enough possible blocks
    if (possibleBlocks.length < word.length) return false;

    // Attach a state to the block to track if it was used.
    const blocksWithState: BlockWithState[] = possibleBlocks.map((chars) => ({
        chars,
        used: false,
    }));

    // Map all chars of the word to a list of possible blocks (blocksWithState)
    const positions: Position[] = word
        .split('')
        .map((ch) => blocksWithState.filter((block) => block.chars.includes(ch)));

    // Start at first index
    return tryMakeWord(word, positions, 0);
}
