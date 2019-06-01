local MockMessagingService = {}

local topics = {}

function MockMessagingService:PublishAsync(topicName, message)
	local topic = topics[topicName]
	if topic then
		topic:Fire(
			{
				Sent = tick(),
				Data = message
			}
		)
	end
end

function MockMessagingService:SubscribeAsync(topicName, callback)
	local topic = topics[topicName]
	if not topic then
		topic = Instance.new("BindableEvent", script)
		topic.Name = topicName
		topics[topicName] = topic
	end

	return topic.Event:Connect(callback)
end

return MockMessagingService
