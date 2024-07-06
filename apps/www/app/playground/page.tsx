import * as Playground from "@/components/playground"
import { Container, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import { AccordionBasic } from "compositions/examples/accordion-basic"
import { AlertWithStatus } from "compositions/examples/alert-with-status"
import { AlertWithSpinner } from "compositions/examples/alert-wtih-spinner"
import { AvatarGrouped } from "compositions/examples/avatar-grouped"
import { AvatarWithBadge } from "compositions/examples/avatar-with-badge"
import { AvatarWithColors } from "compositions/examples/avatar-with-colors"
import { BadgeWithColors } from "compositions/examples/badge-with-colors"
import { BadgeWithGroup } from "compositions/examples/badge-with-group"
import { BadgeWithIcon } from "compositions/examples/badge-with-icon"
import { BlockquoteWithColors } from "compositions/examples/blockquote-with-colors"
import { BreadcrumbBasic } from "compositions/examples/breadcrumb-basic"
import { BreadcrumbWithSeparator } from "compositions/examples/breadcrumb-with-separator"
import { ButtonIcons } from "compositions/examples/button-icons"
import { ButtonWithColors } from "compositions/examples/button-with-colors"
import { ButtonWithIcons } from "compositions/examples/button-with-icons"
import { ButtonWithLoading } from "compositions/examples/button-with-loading"
import { CardWithVariants } from "compositions/examples/card-with-variants"
import { CheckboxCardBasic } from "compositions/examples/checkbox-card-basic"
import { CheckboxWithColors } from "compositions/examples/checkbox-with-colors"
import { CheckboxWithCustomIcon } from "compositions/examples/checkbox-with-custom-icon"
import { CheckboxWithIndeterminate } from "compositions/examples/checkbox-with-indeterminate"
import { CheckboxWithStates } from "compositions/examples/checkbox-with-states"
import { CheckmarkStates } from "compositions/examples/checkmark-states"
import { CircularProgressWithColors } from "compositions/examples/circular-progress-with-colors"
import { CodeWithColors } from "compositions/examples/code-with-colors"
import { CollapsibleBasic } from "compositions/examples/collapsible-basic"
import { CollapsibleLazyMounted } from "compositions/examples/collapsible-lazy-mounted"
import { DataListBasic } from "compositions/examples/data-list-basic"
import { DataListWithInfo } from "compositions/examples/data-list-with-info"
import { DialogNested } from "compositions/examples/dialog-nested"
import { DialogSizes } from "compositions/examples/dialog-sizes"
import { DialogWithDataList } from "compositions/examples/dialog-with-datalist"
import {
  DialogWithFinalFocus,
  DialogWithInitialFocus,
} from "compositions/examples/dialog-with-focus"
import {
  DialogWithInsideScroll,
  DialogWithOutsideScroll,
} from "compositions/examples/dialog-with-scroll"
import { DrawerBasic } from "compositions/examples/drawer-basic"
import { EmptyStateWithAction } from "compositions/examples/empty-state-with-action"
import { HeadingWithSizes } from "compositions/examples/heading-with-sizes"
import { HoverCardBasic } from "compositions/examples/hovercard-basic"
import { InputWithDescription } from "compositions/examples/input-with-description"
import { InputWithError } from "compositions/examples/input-with-error"
import { InputWithField } from "compositions/examples/input-with-field"
import { InputWithLeftAndRightElement } from "compositions/examples/input-with-left-and-right-element"
import { InputWithLeftElement } from "compositions/examples/input-with-left-element"
import { MenuBasic } from "compositions/examples/menu-basic"
import { MenuWithCommand } from "compositions/examples/menu-with-command"
import { MenuWithContextTrigger } from "compositions/examples/menu-with-context-trigger"
import { MenuWithRadioItems } from "compositions/examples/menu-with-radio-items"
import { MenuWithSubmenu } from "compositions/examples/menu-with-submenu"
import { NativeSelectBasic } from "compositions/examples/native-select-basic"
import { NumberInputWithSizes } from "compositions/examples/number-input-with-sizes"
import { PopoverSizes } from "compositions/examples/popover-sizes"
import { ProgressWithColors } from "compositions/examples/progress-with-colors"
import { ProseBasic } from "compositions/examples/prose-basic"
import { RadioCardBasic } from "compositions/examples/radio-card-basic"
import { RadioCardCentered } from "compositions/examples/radio-card-centered"
import { RadioGroupWithColors } from "compositions/examples/radio-group-with-colors"
import { RatingWithColors } from "compositions/examples/rating-with-colors"
import { SegmentControlSizes } from "compositions/examples/segment-control-sizes"
import { SelectInPopover } from "compositions/examples/select-in-popover"
import { SelectWithAvatar } from "compositions/examples/select-with-avatar"
import { SelectWithOverflow } from "compositions/examples/select-with-overflow"
import { SkeletonBasic } from "compositions/examples/skeleton-basic"
import { SkeletonForFeed } from "compositions/examples/skeleton-for-feed"
import { SkeletonWithLoaded } from "compositions/examples/skeleton-with-loaded"
import { SliderWithColors } from "compositions/examples/slider-with-colors"
import { SpinnerWithColors } from "compositions/examples/spinner-with-colors"
import { StatBasic } from "compositions/examples/stat-basic"
import { StatusWithSizes } from "compositions/examples/status-with-sizes"
import { StepsBasic } from "compositions/examples/steps-basic"
import { StepsVertical } from "compositions/examples/steps-vertical"
import { StepsWithDescription } from "compositions/examples/steps-with-description"
import { StepsWithIcon } from "compositions/examples/steps-with-icon"
import { SwitchWithColors } from "compositions/examples/switch-with-colors"
import { TableBasic } from "compositions/examples/table-basic"
import { TableWithColumnGroup } from "compositions/examples/table-with-colgroup"
import { TableWithOverflow } from "compositions/examples/table-with-overflow"
import { TableWithSelection } from "compositions/examples/table-with-selection"
import { TableWithStickyColumn } from "compositions/examples/table-with-sticky-column"
import { TabsStretched } from "compositions/examples/tabs-stretched"
import { TabsWithIndicator } from "compositions/examples/tabs-with-indicator"
import { TabsWithLink } from "compositions/examples/tabs-with-links"
import { TabsWithVariants } from "compositions/examples/tabs-with-variants"
import { TabsWithVertical } from "compositions/examples/tabs-with-vertical"
import { TagWithColors } from "compositions/examples/tag-with-colors"
import { TextareaWithAutoresize } from "compositions/examples/textarea-with-autoresize"
import { TextareaWithDescription } from "compositions/examples/textarea-with-description"
import { TextareaWithError } from "compositions/examples/textarea-with-error"
import { TextareaWithField } from "compositions/examples/textarea-with-field"
import { TooltipBasic } from "compositions/examples/tooltip-basic"
import { Button } from "compositions/ui/button"
import { FileButton, FileDropzone } from "compositions/ui/file-button"
import { Pagination, SimplePagination } from "compositions/ui/pagination"
import { ScrubberInput } from "compositions/ui/scrubber-input"
import { StepperInput } from "compositions/ui/stepper-input"
import { HiUpload } from "react-icons/hi"
import { LuMinimize2 } from "react-icons/lu"

export default function Page() {
  return (
    <Container py="20" fontSize="sm" maxW="4xl">
      <Playground.Section>
        <Playground.SectionTitle id="Table">Table</Playground.SectionTitle>
        <Playground.SectionContent>
          <TableBasic />
          <TableWithColumnGroup />
          <TableWithOverflow />
          <TableWithSelection />
          <TableWithStickyColumn />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Steps">Steps</Playground.SectionTitle>
        <Playground.SectionContent gap="10">
          <StepsBasic />
          <StepsVertical />
          <StepsWithDescription />
          <StepsWithIcon />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Collapsible">
          Collapsible
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <CollapsibleBasic />
          <CollapsibleLazyMounted />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="NativeSelect">
          NativeSelect
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <NativeSelectBasic />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Select">Select</Playground.SectionTitle>
        <Playground.SectionContent align="flex-start">
          <SelectWithOverflow />
          <SelectWithAvatar />
          <SelectInPopover />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="NumberInput">
          NumberInput
        </Playground.SectionTitle>
        <Playground.SectionContent gap="14" align="stretch">
          <NumberInputWithSizes />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Tabs">Tabs</Playground.SectionTitle>
        <Playground.SectionContent gap="14">
          <TabsWithVariants />
          <TabsWithVertical />
          <SimpleGrid columns={2} width="full" gap="14">
            <TabsWithIndicator />
            <TabsWithLink />
          </SimpleGrid>
          <TabsStretched />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Skeleton">
          Skeleton
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <SkeletonBasic />
          <SkeletonForFeed />
          <SkeletonWithLoaded />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="StepperInput">
          StepperInput
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <StepperInput defaultValue="12" min={0} />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="ScrubberInput">
          ScrubberInput
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <Text>Just like Figma, interact to scrub value</Text>
          <HStack>
            <ScrubberInput
              label="Angle"
              icon={<LuMinimize2 />}
              defaultValue="0"
            />
            <ScrubberInput
              label="Height (px)"
              defaultValue="12"
              icon={<Text fontSize="sm">H</Text>}
            />
          </HStack>
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Dialog">Dialog</Playground.SectionTitle>
        <Playground.SectionContent>
          <DialogSizes />
          <DialogWithDataList />
          <DialogWithInsideScroll />
          <DialogWithOutsideScroll />
          <DialogNested />
          <DialogWithInitialFocus />
          <DialogWithFinalFocus />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Drawer">Drawer</Playground.SectionTitle>
        <Playground.SectionContent align="flex-start">
          <DrawerBasic />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="CheckboxCard">
          CheckboxCard
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <CheckboxCardBasic />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Checkmark">
          Checkmark
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <CheckmarkStates />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="RadioCard">
          RadioCard
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <RadioCardBasic />
          <RadioCardCentered />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Breadcrumb">
          Breadcrumb
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <BreadcrumbBasic />
          <BreadcrumbWithSeparator />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Menu">Menu</Playground.SectionTitle>
        <Playground.SectionContent direction="row">
          <MenuWithRadioItems />
          <MenuBasic />
          <MenuWithCommand />
          <MenuWithSubmenu />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="ContextMenu">
          ContextMenu
        </Playground.SectionTitle>
        <Playground.SectionContent direction="row">
          <MenuWithContextTrigger />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="DataList">
          DataList
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <DataListBasic />
          <DataListWithInfo />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Input">Input</Playground.SectionTitle>
        <Playground.SectionContent>
          <InputWithLeftElement />
          <InputWithLeftAndRightElement />
          <InputWithField />
          <InputWithDescription />
          <InputWithError />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Textarea">
          Textarea
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <TextareaWithField />
          <TextareaWithDescription />
          <TextareaWithError />
          <TextareaWithAutoresize />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Popover">Popover</Playground.SectionTitle>
        <Playground.SectionContent>
          <PopoverSizes />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Tag">Tag</Playground.SectionTitle>
        <Playground.SectionContent>
          <TagWithColors />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="stat">Stat</Playground.SectionTitle>
        <Playground.SectionContent>
          <StatBasic />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Accordion">
          Accordion
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <AccordionBasic />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="avatar">Avatar</Playground.SectionTitle>
        <Playground.SectionContent>
          <AvatarWithBadge />
          <AvatarWithColors />
          <AvatarGrouped />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="alert">Alert</Playground.SectionTitle>
        <Playground.SectionContent>
          <AlertWithStatus />
          <AlertWithSpinner />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="badge">Badge</Playground.SectionTitle>
        <Playground.SectionContent>
          <BadgeWithColors />
          <BadgeWithIcon />
          <BadgeWithGroup />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Blockquote">
          Blockquote
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <BlockquoteWithColors />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Card">Card</Playground.SectionTitle>
        <Playground.SectionContent>
          <CardWithVariants />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="code">Code</Playground.SectionTitle>
        <Playground.SectionContent>
          <CodeWithColors />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Checkbox">
          Checkbox
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <CheckboxWithStates />
          <CheckboxWithIndeterminate />
          <CheckboxWithCustomIcon />
          <CheckboxWithColors />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="button">Button</Playground.SectionTitle>
        <Playground.SectionContent>
          <ButtonWithIcons />
          <ButtonWithLoading />
          <ButtonIcons />
          <ButtonWithColors />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="HoverCard">
          HoverCard
        </Playground.SectionTitle>
        <Playground.SectionContent gap="14">
          <HoverCardBasic />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="progress">
          Linear Progress
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <ProgressWithColors />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Pagination">
          Pagination
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <Pagination count={100} pageSize={10} />
          <SimplePagination showPageText count={100} pageSize={10} />
          <SimplePagination count={100} pageSize={10} />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="circular-progress">
          Circular Progress
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <CircularProgressWithColors />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="radio">
          Radio Group
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <RadioGroupWithColors />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="rating">Rating</Playground.SectionTitle>
        <Playground.SectionContent>
          <RatingWithColors />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Spinner">Spinner</Playground.SectionTitle>
        <Playground.SectionContent>
          <SpinnerWithColors />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="Status">Status</Playground.SectionTitle>
        <Playground.SectionContent>
          <StatusWithSizes />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="switch">Switch</Playground.SectionTitle>
        <Playground.SectionContent>
          <SwitchWithColors />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="heading">Heading</Playground.SectionTitle>
        <Playground.SectionContent>
          <HeadingWithSizes />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="prose">Prose</Playground.SectionTitle>
        <Playground.SectionContent>
          <ProseBasic />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="segment-control">
          Segment Control
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <SegmentControlSizes />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="empty-state">
          Empty State
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <EmptyStateWithAction />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="file-button">
          File Button
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <FileButton width="auto">
            <Button variant="outline" startIcon={<HiUpload />}>
              Upload file
            </Button>
          </FileButton>
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="FileDropzone">
          File Dropzone
        </Playground.SectionTitle>
        <Playground.SectionContent>
          <FileDropzone />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="slider">Slider</Playground.SectionTitle>
        <Playground.SectionContent>
          <SliderWithColors />
        </Playground.SectionContent>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="tooltip">Tooltip</Playground.SectionTitle>
        <Playground.SectionContent align="flex-start">
          <TooltipBasic />
        </Playground.SectionContent>
      </Playground.Section>
    </Container>
  )
}
